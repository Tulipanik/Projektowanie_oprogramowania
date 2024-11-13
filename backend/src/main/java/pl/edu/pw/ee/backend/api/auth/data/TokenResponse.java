package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;

@Builder
public record TokenResponse(String authToken, String refreshToken) {
}
