package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrdersCourierDataDTO;

import java.util.List;

public interface IZamowieniaAPI {
    List<OrderDTO> getOrdersForClient(int clientId);
    List<OrdersCourierDataDTO> getOrdersForCourier(int courierId);
    OrderDTO getOrderData(int orderId);
    int placeOrder(OrderDTO orderData);
    boolean payForOrder(int orderId);
    boolean setOrderStatus(int orderId, String status);
}
