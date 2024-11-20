package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

@Builder
public record OrderDataDTO(String city, int clientId, String comment, String email, String name,
                           String phone, String street, String surname, String zipCode) {
}
