package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderMapper;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
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
public class BazaZamowien implements IBazaZamowien {
    private final OrderRepository orderRepository;
    private final DishRepository dishRepository;
    private final ClientRepository clientRepository;

    @Override
    @Transactional
    public int setOrderData(OrderDTO orderData) {
        log.info("Creating order for request: {}", orderData);

        OrderDataDTO orderDataDto = orderData.orderData();
        List<OrderDishDTO> meals = orderData.meals();

        log.info("Retrieving client with id: {}", orderDataDto.clientId());

        Client client = clientRepository.findById(orderDataDto.clientId())
                .orElseThrow(() -> new ClientNotFoundException(orderDataDto.clientId()));

        OrderData orderDataToSave = buildOrderDataToSave(orderDataDto, client);

        log.info("Retrieving {} dishes", meals.size());

        List<Dish> dishes = meals.stream()
                .map(meal -> dishRepository.findById(meal.dish().dishId())
                        .orElseThrow(() -> new DishNotFoundException(meal.dish().dishId())))
                .toList();

        Order orderToSave = buildOrderToSave(orderDataToSave, dishes);

        log.info("Saving order: {}", orderToSave);

        Order savedOrder = orderRepository.save(orderToSave);

        log.info("Returning id of saved order: {}", savedOrder.getOrderId());

        return savedOrder.getOrderId();
    }

    private OrderData buildOrderDataToSave(OrderDataDTO orderData, Client client) {
        return OrderData.builder()
                .email(orderData.email())
                .city(orderData.city())
                .comment(orderData.comment())
                .street(orderData.street())
                .surname(orderData.surname())
                .zipCode(orderData.zipCode())
                .phone(orderData.phone())
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