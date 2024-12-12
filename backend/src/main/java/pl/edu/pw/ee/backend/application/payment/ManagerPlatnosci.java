package pl.edu.pw.ee.backend.application.payment;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.application.payment.interfaces.IAPISystemuPlatnosci;
import pl.edu.pw.ee.backend.application.payment.interfaces.IPlatnosc;
import pl.edu.pw.ee.backend.application.payment.interfaces.ISkarbonka;

@Slf4j
@Service
@RequiredArgsConstructor
public class ManagerPlatnosci implements IPlatnosc {

    private final ISkarbonka skarbonka;
    private final IAPISystemuPlatnosci apiSystemuPlatnosci;

    @Override
    public boolean settleOrder(int orderId, int clientId, float price) {
        float currentPiggyStatus = skarbonka.getPiggyBankStatus(clientId);

        if (canBePaidWithPiggy(currentPiggyStatus, price)) {
            payWithPiggy(orderId, currentPiggyStatus, price);
            return true;
        }

        try {
            short paymentId = apiSystemuPlatnosci.pay(price, orderId);
            log.info("Successfully paid with external service, payment id: " + paymentId);
            return true;
        } catch (Exception e) {
            log.warn("Cannot pay with external service");
            return false;
        }
    }

    private boolean canBePaidWithPiggy(float piggyStatus, float price) {
        return piggyStatus - price >= 0;
    }

    private void payWithPiggy(int clientId, float currentPiggyStatus, float price) {
        float newPiggyStatus = currentPiggyStatus - price;
        skarbonka.updatePiggyBankStatus(clientId, newPiggyStatus);
    }
}
