package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;

import java.util.List;

@Order(2)
@Component
@RequiredArgsConstructor
public class ManagerZamowien implements IZamowieniaAPI {
    private final IBazaZamowien bazaZamowien;

    @Override
    public OrderDTO getOrderData(int orderId) {
        return bazaZamowien.getOrderData(orderId);
    }

    @Override
    public List<OrderDTO> getOrdersForClient(int clientId) {
        return bazaZamowien.getOrdersForClient(clientId);
    }

    @Override
    public int placeOrder(OrderDTO orderData) {
        return bazaZamowien.setOrderData(orderData);
    }
}
