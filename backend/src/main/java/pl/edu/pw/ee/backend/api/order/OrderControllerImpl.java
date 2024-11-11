package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderController;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderService;

@RestController
@RequestMapping(
        value = "/api/orders",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class OrderControllerImpl implements OrderController {
    private final OrderService orderService;


    @Override
    @PostMapping()
    public OrderDTO createOrder(@RequestBody OrderDTO order) {
        return orderService.createOrder(order);
    }
}
