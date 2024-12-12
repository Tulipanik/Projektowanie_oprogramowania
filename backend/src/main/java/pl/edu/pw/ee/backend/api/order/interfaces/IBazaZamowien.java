package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrdersCourierDataDTO;
import pl.edu.pw.ee.backend.api.order.data.StoreKeeperOrderDTO;

import java.util.List;

public interface IBazaZamowien {
    List<OrderDTO> getOrdersForClient(int clientId);
    List<OrdersCourierDataDTO> getOrdersForCourier(int courierId);
    List<StoreKeeperOrderDTO> getOrdersForStorekeeper(int storekeeperId);
    OrderDTO getOrderData(int orderId);
    int setOrderData(OrderDTO order);
    boolean changeStatus(int orderId, String status);

}
