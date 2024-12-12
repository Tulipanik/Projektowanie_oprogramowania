package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.entities.dish.MealType;

import java.util.List;

@Builder
public record AddDishDTO(int calories, int cateringCompanyId, List<String> ingredients, String kitchenType, MealType mealType,
                         String name, MultipartFile photo, float price) {
}