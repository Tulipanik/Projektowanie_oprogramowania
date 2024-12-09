package pl.edu.pw.ee.backend.application.payment;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.application.payment.interfaces.ISkarbonka;

@Slf4j
@Component
public class Skarbonka implements ISkarbonka {

    @Override
    public float getPiggyBankStatus(int clientId) {
        log.warn("GetPiggyBankStatus is not implemented, returning 0 as bank status.");
        return 0;
    }

    @Override
    public void updatePiggyBankStatus(int clientId, float price) {
        log.warn("updatePiggyBankStatus is not implemented.");
    }
}
