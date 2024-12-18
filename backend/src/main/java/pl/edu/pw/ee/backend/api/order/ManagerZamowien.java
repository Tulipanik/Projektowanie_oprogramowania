package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrdersCourierDataDTO;
import pl.edu.pw.ee.backend.api.order.data.StoreKeeperOrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;
import pl.edu.pw.ee.backend.application.payment.interfaces.IPlatnosc;

import java.util.List;

@Order(2)
@Component
@RequiredArgsConstructor
public class ManagerZamowien implements IZamowieniaAPI {
    private final IBazaZamowien bazaZamowien;
    private final IPlatnosc managerPlatnosci;

    @Override
    public OrderDTO getOrderData(int orderId) {
        return bazaZamowien.getOrderData(orderId);
    }

    @Override
    public List<OrderDTO> getOrdersForClient(int clientId) {
        return bazaZamowien.getOrdersForClient(clientId);
    }

    @Override
    public List<OrdersCourierDataDTO> getOrdersForCourier(int courierId) {
        return bazaZamowien.getOrdersForCourier(courierId);
    }

    @Override
    public List<StoreKeeperOrderDTO> getOrdersForStorekeeper(int storekeeperId) {
        return bazaZamowien.getOrdersForStorekeeper(storekeeperId);
    }

    @Override
    public int placeOrder(OrderDTO orderData) {
        return bazaZamowien.setOrderData(orderData);
    }

    @Override
    public boolean payForOrder(int orderId) {
        final OrderDTO orderDTO = bazaZamowien.getOrderData(orderId);
        final int clientId = orderDTO.clientData().clientId();
        final float price = orderDTO.price();

        return managerPlatnosci.settleOrder(orderId, clientId, price);
    }

    @Override
    public boolean setOrderStatus(int orderId, String status) {
        return bazaZamowien.changeStatus(orderId, status);
    }
}