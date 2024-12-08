package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;

import java.util.List;

public interface IKoszykAPI {

    void addDishToCart(int cartId, int dishId);

    List<FindDishDTO> getCart(int cartId);

    void removeDishFromCart(int cartId, int dishId);

}
