package pl.edu.pw.ee.backend.application.payment.interfaces;

public interface IPlatnosc {

    boolean settleOrder(int orderId, int clientId, float price);
}
