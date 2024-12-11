package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.entities.order.Order;

import java.util.List;

public interface IOrderService {

    Order findOrderById(int id);

    List<Order> getOrdersForClient(int clientId);

    List<Order> getOrdersForCourier(int courierId);

    List<Order> getOrdersForStorekeeper();

    Order saveOrder(Order order);
}
