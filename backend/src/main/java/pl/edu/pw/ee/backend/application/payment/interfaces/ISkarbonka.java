package pl.edu.pw.ee.backend.application.payment.interfaces;

public interface ISkarbonka {

    float getPiggyBankStatus(int clientId);

    void updatePiggyBankStatus(int clientId, float newBalance);
}
