package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.entities.dish.Dish;

public interface IDishService {

    Dish findDishById(int dishId);
}
