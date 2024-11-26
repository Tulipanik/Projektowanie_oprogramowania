package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

import java.util.List;

public interface IZamowieniaAPI {
    List<OrderDTO> getOrdersForClient(int clientId);
    OrderDTO getOrderData(int orderId);
    int placeOrder(OrderDTO orderData);
    boolean payForOrder(int orderId);
}
