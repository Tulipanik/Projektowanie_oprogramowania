package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import java.util.List;

public interface IBazaZamowien {
    List<OrderDTO> getOrdersForClient(int clientId);
    OrderDTO getOrderData(int orderId);
    int setOrderData(OrderDTO order);
}
