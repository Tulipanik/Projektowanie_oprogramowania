package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.IBazaKoszyka;
import pl.edu.pw.ee.backend.api.cart.interfaces.IKoszykAPI;

import java.util.List;

@Order(2)
@Service
@RequiredArgsConstructor
public class ManagerKoszyka implements IKoszykAPI {

    private final IBazaKoszyka bazaKoszyka;

    @Override
    public void addDishToCart(int cartId, int dishId) {
        bazaKoszyka.addDishToCart(cartId, dishId);
    }

    @Override
    public List<FindDishDTO> getCart(int cartId) {
        return bazaKoszyka.getCart(cartId);
    }

    @Override
    public void removeDishFromCart(int cartId, int dishId) {
        bazaKoszyka.removeDishFromCart(cartId, dishId);
    }

}
