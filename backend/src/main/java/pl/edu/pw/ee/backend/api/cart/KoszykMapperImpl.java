package main.java.pl.edu.pw.ee.backend.api.cart;

import org.springframework.stereotype.Component;

import main.java.pl.edu.pw.ee.backend.api.cart.interfaces.IKoszykMapper;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.CartMapper;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.MealType;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

import java.util.List;

@Component
public class KoszykMapperImpl implements IKoszykMapper {

    @Override
    public AddDishDTO toAddDishDTO(Dish dish) {
        return AddDishDTO.builder()
                .calories(dish.getCalories())
                .cateringCompanyId(dish.getExternalCompany().getCompanyId())
                .ingredients(dish.getIngredients())
                .kitchenType(dish.getKitchenType())
                .mealType(dish.getMealType().name())
                .name(dish.getName())
                .photo(null) // Placeholder as MultipartFile cannot be directly set here
                .price(dish.getPrice())
                .build();
    }

    @Override
    public Dish toDishEntity(AddDishDTO addDishDTO) {
        return Dish.builder()
                .calories(addDishDTO.calories())
                .name(addDishDTO.name())
                .mealType(MealType.valueOf(addDishDTO.mealType()))
                .kitchenType(addDishDTO.kitchenType())
                .price(addDishDTO.price())
                .ingredients(addDishDTO.ingredients())
                .externalCompany(new ExternalCompany(addDishDTO.cateringCompanyId(), null, null)) // Placeholder for simplicity
                .image(new DishImage(0, "default.jpg")) // Placeholder image
                .build();
    }

    @Override
    public Cart toCartEntity(int cartId, Dish dish) {
        return Cart.builder()
                .cartId(cartId)
                .dishes(List.of(dish))
                .build();
    }
}
