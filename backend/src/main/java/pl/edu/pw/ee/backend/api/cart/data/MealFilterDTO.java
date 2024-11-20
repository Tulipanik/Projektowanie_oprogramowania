package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import org.hibernate.query.SortDirection;
import pl.edu.pw.ee.backend.entities.dish.MealType;

import java.util.List;

@Builder
public record MealFilterDTO(SortDirection sorting, List<MealType> values) {
}
