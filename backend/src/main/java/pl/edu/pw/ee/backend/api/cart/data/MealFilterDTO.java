package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.dish.MealType;
import java.util.List;

@Builder
public record MealFilterDTO(List<MealType> values) {
}
