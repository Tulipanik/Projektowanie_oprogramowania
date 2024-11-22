package pl.edu.pw.ee.backend.api.auth.data;

import pl.edu.pw.ee.backend.entities.user.Role;

public record UserDTO(String name, String username, String password, Role role) {
}
