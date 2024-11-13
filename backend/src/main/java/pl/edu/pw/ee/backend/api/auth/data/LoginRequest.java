package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;

@Builder
public record LoginRequest(String username, String password) {
}
