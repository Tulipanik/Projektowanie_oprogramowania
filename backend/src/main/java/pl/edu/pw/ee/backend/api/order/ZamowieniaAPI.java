package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderService;

import java.util.List;

@RestController
@RequestMapping(
        value = "/api/v1/orders",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class ZamowieniaAPI implements IZamowieniaAPI {
    private final IBazaZamowien bazaZamowien;

    @Override
    @PostMapping()
    public OrderDTO createOrder(@RequestBody OrderDTO order) {
        return bazaZamowien.createOrder(order);
    }

    @Override
    @PostMapping()
    public int placeOrder(@RequestBody OrderDTO orderData) {
        return bazaZamowien.setOrderData(orderData);
    }

    @Override
    @GetMapping("/client/{clientId}")
    public List<OrderDTO> getOrdersForClient(@PathVariable int clientId) {
        return bazaZamowien.getOrdersForClient(clientId);
    }

    @Override
    @GetMapping("/{orderId}")
    public OrderDTO getOrderData(@PathVariable int orderId) {
        return bazaZamowien.getOrderData(orderId);
    }
}
