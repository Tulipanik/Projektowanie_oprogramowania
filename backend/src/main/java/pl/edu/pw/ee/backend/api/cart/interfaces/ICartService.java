package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.entities.cart.Cart;

public interface ICartService {

    Cart findById(int cartId);

    Cart save(Cart cart);

}
