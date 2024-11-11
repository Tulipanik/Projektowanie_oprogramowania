package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;

@Builder
public record AccountRequest(String name, String password, String username) {
}
