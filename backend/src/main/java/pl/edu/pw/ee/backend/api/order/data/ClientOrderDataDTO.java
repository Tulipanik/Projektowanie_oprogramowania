package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

@Builder
public record ClientOrderDataDTO(int clientId, String email, String name, String orderDate, int orderId,
                                 String phoneNumber, float price, String surname) {
}
