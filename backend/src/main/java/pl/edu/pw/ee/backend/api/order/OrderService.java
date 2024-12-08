package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.order.interfaces.IOrderService;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.OrderRepository;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.entities.user.courier.CourierRepository;
import pl.edu.pw.ee.backend.utils.exceptions.order.CourierNotFoundException;
import pl.edu.pw.ee.backend.utils.exceptions.order.OrderNotFoundException;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService {

    private final OrderRepository orderRepository;
    private final ClientRepository clientRepository;
    private final CourierRepository courierRepository;


    @Override
    public Order findOrderById(int orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new OrderNotFoundException(HttpStatus.NOT_FOUND, "Order not found with id: " + orderId));
    }

    @Override
    public List<Order> getOrdersForClient(int clientId) {
        if (!clientRepository.existsById(clientId)) {
            throw new ClientNotFoundException(clientId);
        }

        return orderRepository.findOrdersByClientId(clientId);
    }

    @Override
    public List<Order> getOrdersForCourier(int courierId) {
        return courierRepository.findById(courierId)
                .orElseThrow(() -> new CourierNotFoundException(HttpStatus.NOT_FOUND, String.format("Courier not found with id: %d", courierId)))
                .getDeliverOrders();
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
