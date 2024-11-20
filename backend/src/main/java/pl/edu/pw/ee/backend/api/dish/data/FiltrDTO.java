package pl.edu.pw.ee.backend.api.dish.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.dish.MealType;

@Builder
public record FiltrDTO(
        MealType mealType,
        String kitchenType,
        Integer cateringCompanyId
) {}