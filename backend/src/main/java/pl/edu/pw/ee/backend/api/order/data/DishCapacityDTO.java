package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

@Builder
public record DishCapacityDTO(int dishCount, String dishName, String realisationDate) {
}
