package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

public interface IZamowieniaAPI {

    OrderDTO createOrder(OrderDTO order);
}
