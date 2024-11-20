package pl.edu.pw.ee.backend.api.dish;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishMapper;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

@Slf4j
@Component
public class DishMapperImpl implements IDishMapper {

    @Override
    public FindDishDTO toFindDishDto(Dish dish) {
        return FindDishDTO.builder()
                .calories(dish.getCalories())
                .companyName(dish.getExternalCompany().getAddress())
                .dishId(dish.getDishId())
                .ingredients(dish.getIngredients())
                .kitchenType(dish.getKitchenType())
                .mealType(dish.getMealType())
                .name(dish.getName())
                .photoLink(dish.getImage() != null ? dish.getImage().getImageUrl() : null)
                .price(dish.getPrice())
                .build();
    }


    @Override
    public Dish toDish(AddDishDTO dishDTO, ExternalCompany externalCompany, DishImage image) {
        return Dish.builder()
                .calories(dishDTO.calories())
                .externalCompany(externalCompany)
                .ingredients(dishDTO.ingredients())
                .kitchenType(dishDTO.kitchenType())
                .mealType(dishDTO.mealType())
                .name(dishDTO.name())
                .price(dishDTO.price())
                .image(image)
                .build();
    }


}