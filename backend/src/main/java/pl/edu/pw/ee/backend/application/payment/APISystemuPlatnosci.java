package pl.edu.pw.ee.backend.application.payment;

import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.order.exception.ExternalPaymentServiceException;
import pl.edu.pw.ee.backend.application.payment.interfaces.IAPISystemuPlatnosci;

@Component
public class APISystemuPlatnosci implements IAPISystemuPlatnosci {

    @Override
    public short pay(float amount, int orderId) {
        if (amount <= 30) {
            return 1;
        }

        throw new ExternalPaymentServiceException(orderId);
    }
}
