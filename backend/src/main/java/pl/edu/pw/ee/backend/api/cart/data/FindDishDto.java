package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.dish.MealType;

import java.util.List;

@Builder
public record FindDishDto(int calories, String companyName, int dishId, List<String> ingredients, String kitchenType,
                          MealType mealType, String name, String photoLink, float price) {
}
