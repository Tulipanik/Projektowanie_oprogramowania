package pl.edu.pw.ee.backend.application.payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.application.payment.interfaces.IPlatnosc;
import pl.edu.pw.ee.backend.application.payment.interfaces.ISkarbonka;

@Service
@RequiredArgsConstructor
public class ManagerPlatnosci implements IPlatnosc {

    private static final boolean PAID_WITH_PIGGY = true;
    private static final boolean CANNOT_PAY_WITH_PIGGY = false;

    private final ISkarbonka skarbonka;

    @Override
    @Transactional
    public boolean settleOrder(int orderId, int clientId, float price) {
        float currentPiggyStatus = skarbonka.getPiggyBankStatus(clientId);

        if (canBePaidWithPiggy(currentPiggyStatus, price)) {
            payWithPiggy(orderId, currentPiggyStatus, price);
            return PAID_WITH_PIGGY;
        }

        return CANNOT_PAY_WITH_PIGGY;
    }

    private boolean canBePaidWithPiggy(float piggyStatus, float price) {
        return piggyStatus >= price;
    }

    private void payWithPiggy(int clientId, float currentPiggyStatus, float price) {
        float newPiggyStatus = currentPiggyStatus - price;
        skarbonka.updatePiggyBankStatus(clientId, newPiggyStatus);
    }
}
