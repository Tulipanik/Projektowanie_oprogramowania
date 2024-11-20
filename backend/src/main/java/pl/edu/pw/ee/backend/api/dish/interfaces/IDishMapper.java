package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.entities.dish.Dish;

public interface IDishMapper {
    FindDishDto toFindDishDto(Dish dish);
}
