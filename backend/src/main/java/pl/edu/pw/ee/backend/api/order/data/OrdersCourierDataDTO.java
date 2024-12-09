package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.entities.order.OrderStatus;

import java.util.List;

@Builder
public record OrdersCourierDataDTO(String address, String clientName, String clientSurname, int courierId,
                                   List<FindDishDTO> mealList, int orderId, OrderStatus orderStatus, String phoneNumber) {
}
