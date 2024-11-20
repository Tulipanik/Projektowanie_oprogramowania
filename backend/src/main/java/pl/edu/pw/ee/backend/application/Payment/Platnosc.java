package pl.edu.pw.ee.backend.application.Payment;

import lombok.RequiredArgsConstructor;
import pl.edu.pw.ee.backend.application.Payment.interfaces.IPlatnosc;

@RequiredArgsConstructor
public class Platnosc implements IPlatnosc {

    private final ManagerPlatnosci managerPlatnosci;

    @Override
    public boolean settleOrder(int orderId, int clientId, float price) {
        return managerPlatnosci.settleOrder(orderId, clientId, price);
    }
}
