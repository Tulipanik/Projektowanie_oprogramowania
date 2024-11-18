package main.java.pl.edu.pw.ee.backend.api.cart.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.cart.Cart;

public interface IKoszykMapper {
    AddDishDTO toAddDishDTO(Dish dish);
    Dish toDishEntity(AddDishDTO addDishDTO);
    Cart toCartEntity(int cartId, Dish dish);
}
