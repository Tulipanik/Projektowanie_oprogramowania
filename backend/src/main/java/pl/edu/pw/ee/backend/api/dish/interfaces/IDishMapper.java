package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;

public interface IDishMapper {
    FindDishDTO toFindDishDto(Dish dish);
}
