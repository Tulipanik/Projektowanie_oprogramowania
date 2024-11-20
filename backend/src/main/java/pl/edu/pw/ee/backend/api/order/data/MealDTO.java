package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

@Builder
public record MealDTO(int mealId, String meal) {
}
