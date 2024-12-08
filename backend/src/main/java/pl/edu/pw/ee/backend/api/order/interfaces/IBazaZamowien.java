package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrdersCourierDataDTO;

import java.util.List;

public interface IBazaZamowien {
    List<OrderDTO> getOrdersForClient(int clientId);
    List<OrdersCourierDataDTO> getOrdersForCourier(int courierId);
    OrderDTO getOrderData(int orderId);
    int setOrderData(OrderDTO order);
    boolean changeStatus(int orderId, String status);

}
