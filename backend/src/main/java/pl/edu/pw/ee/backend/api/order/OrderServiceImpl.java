package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderMapper;
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
    private final OrderMapper orderMapper;

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

        return orderMapper.toOrderDTO(savedOrder);
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
}