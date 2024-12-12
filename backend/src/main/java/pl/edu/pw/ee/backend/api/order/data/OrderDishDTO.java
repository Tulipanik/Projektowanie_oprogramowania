package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;

import java.time.LocalDate;

@Builder
public record OrderDishDTO(LocalDate date, FindDishDTO dish) {
}
