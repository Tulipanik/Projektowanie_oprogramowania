package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;

import java.util.List;

@Order(1)
@RestController
@RequestMapping(
        value = "/api/v1/orders",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class ZamowieniaApi implements IZamowieniaAPI {
    private final IZamowieniaAPI managerZamowien;

    @Override
    @PostMapping()
    public int placeOrder(@RequestBody OrderDTO orderData) {
        return managerZamowien.placeOrder(orderData);
    }

    @Override
    @PostMapping("/pay")
    public boolean payForOrder(int orderId) {
        return managerZamowien.payForOrder(orderId);
    }

    @Override
    @GetMapping("/client/{clientId}")
    public List<OrderDTO> getOrdersForClient(@PathVariable int clientId) {
        return managerZamowien.getOrdersForClient(clientId);
    }

    @Override
    @GetMapping("/{orderId}")
    public OrderDTO getOrderData(@PathVariable int orderId) {
        return managerZamowien.getOrderData(orderId);
    }

    @Override
    @PostMapping("/{orderId}/status")
    public boolean setOrderStatus(@PathVariable int orderId, @RequestBody String status) {
        return managerZamowien.setOrderStatus(orderId, status);
    }
}
