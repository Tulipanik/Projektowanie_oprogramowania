package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.api.order.interfaces.IOrderService;
import pl.edu.pw.ee.backend.api.order.interfaces.IOrderMapper;
import pl.edu.pw.ee.backend.api.user.client.interfaces.IClientService;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.OrderStatus;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;
import pl.edu.pw.ee.backend.entities.user.client.Client;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaZamowien implements IBazaZamowien {
    private final IOrderMapper orderMapper;
    private final IOrderService orderService;
    private final IDishService dishService;
    private final IClientService clientService;

    @Override
    @Transactional
    public int setOrderData(OrderDTO orderData) {
        log.info("Creating order for request: {}", orderData);

        OrderDataDTO orderDataDto = orderData.clientData();
        List<OrderDishDTO> meals = orderData.meals();

        log.info("Retrieving client with id: {}", orderDataDto.clientId());

        Client client = clientService.findClientById(orderDataDto.clientId());

        OrderData orderDataToSave = buildOrderDataToSave(orderDataDto, client);

        log.info("Retrieving {} dishes", meals.size());

        List<Dish> dishes = dishService.findAllDishesForOrderDishDTOList(meals);

        Order orderToSave = buildOrderToSave(orderDataToSave, dishes);

        log.info("Saving order: {}", orderToSave);

        Order savedOrder = orderService.saveOrder(orderToSave);

        log.info("Returning id of saved order: {}", savedOrder.getOrderId());

        return savedOrder.getOrderId();
    }

    @Override
    public List<OrderDTO> getOrdersForClient(int clientId) {
        log.debug("Retrieving orders for client id: {}", clientId);

        List<Order> orders = orderService.getOrdersForClient(clientId);

        log.debug("Found {} orders for client", orders.size());

        return orders.stream()
                .map(orderMapper::toOrderDTO)
                .toList();
    }

    @Override
    @Transactional
    public List<OrderDTO> getOrdersForCourier(int courierId) {
        log.debug("Retrieving orders for courier id: {}", courierId);

        List<Order> orders = orderService.getOrdersForCourier(courierId);

        log.debug("Found {} orders for courier", orders.size());

        return  orders.stream()
                .map(orderMapper::toOrderDTO)
                .toList();
    }

    @Override
    public OrderDTO getOrderData(int orderId) {
        log.debug("Retrieving order data for order id: {}", orderId);

        Order order = orderService.findOrderById(orderId);

        log.debug("Found order: {}", order);

        return orderMapper.toOrderDTO(order);
    }

    @Override
    public boolean changeStatus(int orderId, String status) {
        log.debug("Changing status for order id: {} to: {}", orderId, status);

        Order order = orderService.findOrderById(orderId);

        log.debug("Found order: {}", order);

        OrderStatus orderStatus = OrderStatus.valueOf(status);

        order.setOrderStatus(orderStatus);

        orderService.saveOrder(order);

        log.debug("Changed status for order id: {} to: {}", orderId, status);

        return true;
    }


    private OrderData buildOrderDataToSave(OrderDataDTO orderData, Client client) {
        return OrderData.builder()
                .email(orderData.email())
                .name(orderData.name())
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