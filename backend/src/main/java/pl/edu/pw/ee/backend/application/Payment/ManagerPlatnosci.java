package pl.edu.pw.ee.backend.application.Payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.application.Payment.interfaces.IManagerPlatnosci;
import pl.edu.pw.ee.backend.application.Payment.interfaces.ISkarbonka;

@Service
@RequiredArgsConstructor
public class ManagerPlatnosci implements IManagerPlatnosci {

    private static final boolean PAYED_WITH_PIGGY = true;
    private static final boolean CANNOT_PAY_WITH_PIGGY = false;

    private final ISkarbonka skarbonka;

    public boolean settleOrder(int orderId, int clientId, float price) {
        final float currentPiggyStatus = skarbonka.getPiggyBankStatus(clientId);

        if (canBePayedWithPiggy(currentPiggyStatus, price)) {
            payWithPiggy(orderId, currentPiggyStatus, price);
            return PAYED_WITH_PIGGY;
        }

        return CANNOT_PAY_WITH_PIGGY;
    }

    private boolean canBePayedWithPiggy(float piggyStatus, float price) {
        return piggyStatus - price >= 0;
    }

    private void payWithPiggy(int clientId, float currentPiggyStatus, float price) {
        final float newPiggyStatus = currentPiggyStatus - price;
        skarbonka.updatePiggyBankStatus(clientId, newPiggyStatus);
    }
}
