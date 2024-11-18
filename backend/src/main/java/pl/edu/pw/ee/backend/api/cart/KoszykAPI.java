package main.java.pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.cart.interfaces.IKoszykAPI;

@RestController
@RequestMapping(
        value = "/api/v1/cart",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class KoszykAPI implements IKoszykAPI {
    private final KoszykService koszykService;

    @PostMapping("/{cartId}/dishes/{dishId}")
    public void addDishToCart(@PathVariable int cartId, @PathVariable int dishId) {
        koszykService.addDishToCart(cartId, dishId);
    }
}