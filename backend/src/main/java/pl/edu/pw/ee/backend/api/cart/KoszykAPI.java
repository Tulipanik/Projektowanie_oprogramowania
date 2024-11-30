package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.cart.interfaces.IBazaKoszyka;
import pl.edu.pw.ee.backend.api.cart.interfaces.IKoszykAPI;

@Order(1)
@RestController
@RequestMapping(
        value = "/api/v1/cart",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class KoszykAPI implements IKoszykAPI {
    private final IBazaKoszyka bazaKoszyka;

    @PostMapping("/{cartId}/dishes/{dishId}")
    public void addDishToCart(@PathVariable int cartId, @PathVariable int dishId) {
        bazaKoszyka.addDishToCart(cartId, dishId);
    }
}