package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.entities.order.Order;

import java.util.List;

public interface IOrderService {

    Order findOrderById(int id);

    List<Order> getOrdersForClient(int clientId);

    Order saveOrder(Order order);
}