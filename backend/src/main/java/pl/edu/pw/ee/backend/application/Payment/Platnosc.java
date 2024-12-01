package pl.edu.pw.ee.backend.application.Payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.application.Payment.interfaces.IManagerPlatnosci;
import pl.edu.pw.ee.backend.application.Payment.interfaces.IPlatnosc;

@Component
@RequiredArgsConstructor
public class Platnosc implements IPlatnosc {

    private final IManagerPlatnosci managerPlatnosci;

    @Override
    public boolean settleOrder(int orderId, int clientId, float price) {
        return managerPlatnosci.settleOrder(orderId, clientId, price);
    }
}
