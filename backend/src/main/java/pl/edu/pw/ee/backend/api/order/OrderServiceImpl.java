package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderService;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.OrderRepository;
import pl.edu.pw.ee.backend.entities.order.OrderStatus;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.utils.exceptions.dish.DishNotFoundException;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final DishRepository dishRepository;
    private final ClientRepository clientRepository;

    @Override
    @Transactional
    public OrderDTO createOrder(OrderDTO order) {
        log.debug("Creating order for request: {}", order);

        OrderDataDTO orderData = order.orderData();
        List<OrderDishDTO> meals = order.meals();

        log.debug("Retrieving client with id: {}", orderData.clientId());

        Client client = clientRepository.findById(orderData.clientId())
                .orElseThrow(() -> new ClientNotFoundException(orderData.clientId()));

        OrderData orderDataToSave = buildOrderDataToSave(orderData, client);

        log.debug("Retrieving {} dishes", meals.size());

        List<Dish> dishes = meals.stream()
                .map(meal -> dishRepository.findById(meal.dish().dishId())
                        .orElseThrow(() -> new DishNotFoundException(meal.dish().dishId())))
                .toList();

        Order orderToSave = buildOrderToSave(orderDataToSave, dishes);

        log.debug("Saving order: {}", orderToSave);

        Order savedOrder = orderRepository.save(orderToSave);

        log.debug("Returning response for saved order: {}", savedOrder);

        return toOrderDTO(savedOrder);
    }

    private OrderData buildOrderDataToSave(OrderDataDTO orderData, Client client) {
        return OrderData.builder()
                .email(orderData.email())
                .city(orderData.city())
                .comment(orderData.comment())
                .street(orderData.street())
                .surname(orderData.surname())
                .zipCode(orderData.zipCode())
                .phone(orderData.phoneNumber())
                .client(client)
                .build();
    }

    private Order buildOrderToSave(OrderData orderData, List<Dish> dishes) {
        return Order.builder()
                .orderDate(LocalDate.now())
                .orderStatus(OrderStatus.PLACED)
                .orderData(orderData)
                .dishes(dishes)
                .build();
    }

    private OrderDTO toOrderDTO(Order order) {
        return OrderDTO.builder()
                .orderData(toOrderDataDTO(order))
                .meals(order.getDishes().stream()
                        .map(dish -> toOrderDishDTO(order.getOrderDate(), dish))
                        .toList())
                .build();
    }

    private OrderDataDTO toOrderDataDTO(Order order) {
        return OrderDataDTO.builder()
                .city(order.getOrderData().getCity())
                .clientId(order.getOrderData().getClient().getClientId())
                .email(order.getOrderData().getEmail())
                .orderDate(order.getOrderDate().toString())
                .orderId(order.getOrderId())
                .phoneNumber(order.getOrderData().getPhone())
                .price(order.getDishes().stream()
                        .map(Dish::getPrice)
                        .reduce(0.0f, Float::sum))
                .street(order.getOrderData().getStreet())
                .surname(order.getOrderData().getSurname())
                .zipCode(order.getOrderData().getZipCode())
                .comment(order.getOrderData().getComment())
                .build();
    }

    private OrderDishDTO toOrderDishDTO(LocalDate orderDate, Dish dish) {
        return OrderDishDTO.builder()
                .date(orderDate)
                .dish(toFindDishDTO(dish))
                .build();
    }

    private FindDishDto toFindDishDTO(Dish dish) {
        return FindDishDto.builder()
                .calories(dish.getCalories())
                .companyName(dish.getCateringCompany().getAddress())
                .dishId(dish.getDishId())
                .ingredients(dish.getIngredients())
                .kitchenType(dish.getKitchenType())
                .mealType(dish.getMealType())
                .name(dish.getName())
                .photoLink(dish.getImage().getImageUrl())
                .price(dish.getPrice())
                .build();
    }
}
