package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;

import java.util.List;

public interface IBazaKoszyka {
    List<FindDishDTO> getCart(int cartId);
    void addDishToCart(int cartId, int dishId);
}
