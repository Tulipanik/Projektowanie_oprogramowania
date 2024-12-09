package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.dish.Dish;

public interface ICartService {

    Cart findById(int cartId);

    Cart save(Cart cart);

    void removeDishFromCart(Cart cart, Dish dish);
}
