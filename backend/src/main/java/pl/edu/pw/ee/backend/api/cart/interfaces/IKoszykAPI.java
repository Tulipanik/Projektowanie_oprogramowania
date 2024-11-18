package pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;

public interface IKoszykAPI {

    void addDishToCart(AddDishDTO order);
}
