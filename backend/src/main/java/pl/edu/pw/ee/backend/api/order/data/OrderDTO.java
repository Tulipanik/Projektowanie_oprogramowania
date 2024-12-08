package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.order.OrderStatus;

import java.time.LocalDate;
import java.util.List;

@Builder
public record OrderDTO(OrderDataDTO clientData, List<OrderDishDTO> meals, LocalDate orderDate, int orderId, float price,
                       OrderStatus status) {
}
