package pl.edu.pw.ee.backend.application.Payment.interfaces;

public interface ISkarbonka {

    float getPiggyBankStatus(int clientId);

    void updatePiggyBankStatus(int clientId, float price);
}
