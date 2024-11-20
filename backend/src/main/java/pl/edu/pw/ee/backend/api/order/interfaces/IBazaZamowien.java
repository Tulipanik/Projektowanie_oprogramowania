package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

public interface IBazaZamowien {

    int setOrderData(OrderDTO order);

    OrderDTO getOrderData(int orderId);
}
