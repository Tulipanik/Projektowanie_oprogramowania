package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;

@Builder
public record AccountCreateDTO(String name, String password, String username, float balance) {
}
