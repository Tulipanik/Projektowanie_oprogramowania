package pl.edu.pw.ee.backend.entities.user;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public enum Role {

    STOREKEEPER,
    MANAGER,
    COURIER,
    CLIENT,
    EXTERNAL_COMPANY,
    LAW_DEPARTMENT;

    public final List<SimpleGrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_%s".formatted(this.name())));
    }

}
