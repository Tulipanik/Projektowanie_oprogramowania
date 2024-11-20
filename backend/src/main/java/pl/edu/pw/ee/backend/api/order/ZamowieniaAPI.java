package pl.edu.pw.ee.backend.api.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IZamowieniaAPI;
import pl.edu.pw.ee.backend.api.order.interfaces.IBazaZamowien;
import pl.edu.pw.ee.backend.application.Order.ManagerZamowien;

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
    public int placeOrder(@RequestBody OrderDTO orderData) {
        return bazaZamowien.setOrderData(orderData);
    }

    @Override
    @PostMapping("/pay")
    public boolean payForOrder(int orderId) {
        return managerZamowien.placeOrder(orderId);
    }
}
