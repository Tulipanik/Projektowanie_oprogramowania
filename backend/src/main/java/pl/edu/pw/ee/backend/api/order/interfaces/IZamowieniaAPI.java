package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

public interface IZamowieniaAPI {

    int placeOrder(OrderDTO orderData);

    boolean payForOrder(int orderId);
}
