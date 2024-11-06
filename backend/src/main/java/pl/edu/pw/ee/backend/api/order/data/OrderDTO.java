package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

import java.util.List;

@Builder
public record OrderDTO(OrderDataDTO orderData, List<OrderDishDTO> meals) {
}
