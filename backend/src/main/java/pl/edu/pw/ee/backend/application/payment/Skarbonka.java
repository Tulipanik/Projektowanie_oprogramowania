package pl.edu.pw.ee.backend.application.payment;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.user.client.ClientService;
import pl.edu.pw.ee.backend.application.payment.interfaces.ISkarbonka;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;

@Slf4j
@Component
@RequiredArgsConstructor
public class Skarbonka implements ISkarbonka {
    private final ClientService clientService;

    @Override
    public float getPiggyBankStatus(int clientId) {
        Client client = clientService.findClientById(clientId);

        return client.getBalance();
    }

    @Override
    public void updatePiggyBankStatus(int clientId, float newBalance) {
        Client client = clientService.findClientById(clientId);

        client.setBalance(newBalance);
    }
}
