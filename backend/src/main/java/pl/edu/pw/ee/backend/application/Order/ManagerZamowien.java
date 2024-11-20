package pl.edu.pw.ee.backend.application.Order;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.exception.OrderNotFoundException;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.application.Payment.interfaces.IPlatnosc;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ManagerZamowien {

    private static final boolean SUCCESSFULLY_PAYED_WITH_PIGGY_RETURN_VALUE = true;
    private static final boolean INSUFFICIENT_PIGGY_ACCOUNT_RETURN_VALUE = false;

    private final IPlatnosc platnosc;
    private final IBazaZamowien bazaZamowien;

    public boolean placeOrder(int orderId) {
        final OrderDTO orderDTO = bazaZamowien.getOrderData(orderId);

        if (Objects.isNull(orderDTO)) {
            throw new OrderNotFoundException(orderId);
        }

        final int clientId = orderDTO.orderData().clientId();
        final float price = orderDTO.price();

        final boolean successfullyPayedWithPiggy = platnosc.settleOrder(orderId, clientId, price);

        if (successfullyPayedWithPiggy) {
            return SUCCESSFULLY_PAYED_WITH_PIGGY_RETURN_VALUE;
        } else {
            return INSUFFICIENT_PIGGY_ACCOUNT_RETURN_VALUE;
        }
    }
}
