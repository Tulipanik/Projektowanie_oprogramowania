package pl.edu.pw.ee.backend.application.Payment.interfaces;

public interface IPlatnosc {

    boolean settleOrder(int orderId, int clientId, float price);
}
