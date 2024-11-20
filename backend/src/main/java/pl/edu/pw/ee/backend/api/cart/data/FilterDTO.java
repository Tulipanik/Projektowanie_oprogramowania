package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;

@Builder
public record FilterDTO(CompanyFilterDTO companyFilter, KitchenFilterDTO kitchenFilter, MealFilterDTO mealFilter) {
}
