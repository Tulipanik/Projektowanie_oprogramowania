package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.application.Order.ManagerZamowien;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;

import java.util.List;

@RestController
@RequestMapping(
        value = "/api/v1/orders",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class ZamowieniaAPI implements IZamowieniaAPI {
    private final IBazaZamowien bazaZamowien;
    private final ManagerZamowien managerZamowien;

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
    @PostMapping("/pay")
    public boolean payForOrder(int orderId) {
        return managerZamowien.placeOrder(orderId);
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
