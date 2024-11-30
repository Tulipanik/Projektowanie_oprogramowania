package pl.edu.pw.ee.backend.api.cart.data;
import lombok.Builder;
import org.hibernate.query.SortDirection;

@Builder
public record FilterDTO(CompanyFilterDTO companyName, KitchenFilterDTO kitchenType, MealFilterDTO mealType, SortingKey sortingKey, SortDirection sorting) {
}
