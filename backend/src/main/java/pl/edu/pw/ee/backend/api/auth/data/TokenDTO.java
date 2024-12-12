package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;

@Builder
public record TokenDTO(String authToken, String refreshToken) {
}
