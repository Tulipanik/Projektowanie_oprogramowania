package pl.edu.pw.ee.backend.api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.auth.data.LoginDTO;
import pl.edu.pw.ee.backend.api.auth.data.TokenDTO;
import pl.edu.pw.ee.backend.api.auth.interfaces.IAuthController;
import pl.edu.pw.ee.backend.api.auth.interfaces.IAuthService;

@Order(2)
@Component
@RequiredArgsConstructor
public class AuthManager implements IAuthController {

    private final IAuthService authService;

    @Override
    public TokenDTO login(LoginDTO loginDTO) {
        return authService.login(loginDTO);
    }

}
