package pl.edu.pw.ee.backend.application.Payment.interfaces;

public interface IManagerPlatnosci {
    boolean settleOrder(int orderId, int clientId, float price);
}
