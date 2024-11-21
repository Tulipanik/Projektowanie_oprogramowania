package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

import java.util.List;

public interface IZamowieniaAPI {
    OrderDTO createOrder(OrderDTO order);
    List<OrderDTO> getOrdersForClient(int clientId);
    OrderDTO getOrderData(int orderId);
    int placeOrder(OrderDTO orderData);
    boolean setOrderStatus(int orderId, String status);
}
