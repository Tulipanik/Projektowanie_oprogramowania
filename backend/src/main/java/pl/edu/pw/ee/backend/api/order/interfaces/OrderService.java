package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDTO;

public interface OrderService {

    OrderDTO createOrder(OrderDTO order);
}
