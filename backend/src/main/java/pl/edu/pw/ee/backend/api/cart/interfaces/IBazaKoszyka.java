package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;

public interface IBazaKoszyka {
    FindDishDTO getCart(int cartId);
    void addDishToCart(int cartId, int dishId);
}
