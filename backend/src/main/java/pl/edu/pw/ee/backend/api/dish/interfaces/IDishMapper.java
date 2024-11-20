package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

public interface IDishMapper {
    FindDishDTO toFindDishDto(Dish dish);
    Dish toDish(AddDishDTO dishDTO, ExternalCompany externalCompany, DishImage imagePath);
}
