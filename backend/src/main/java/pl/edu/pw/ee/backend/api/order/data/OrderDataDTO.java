package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

@Builder
public record OrderDataDTO(String city, long clientId, String email, String name, String orderDate, int orderId,
                            String phoneNumber, float price, String street, String surname, String zipCode, String comment) {
}
