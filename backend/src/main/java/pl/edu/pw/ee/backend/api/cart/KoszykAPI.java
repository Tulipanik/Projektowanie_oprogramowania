package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.IKoszykAPI;

import java.util.List;

@Order(1)
@RestController
@RequestMapping(
        value = "/api/v1/cart",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class KoszykAPI implements IKoszykAPI {
    private final IKoszykAPI koszykAPI;

    @PostMapping("/{cartId}/dishes/{dishId}")
    public void addDishToCart(@PathVariable int cartId, @PathVariable int dishId) {
        koszykAPI.addDishToCart(cartId, dishId);
    }

    @GetMapping("/{cartId}")
    public List<FindDishDTO> getCart(@PathVariable int cartId) {
        return koszykAPI.getCart(cartId);
    }
}