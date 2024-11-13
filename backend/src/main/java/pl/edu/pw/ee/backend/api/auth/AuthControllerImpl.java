package pl.edu.pw.ee.backend.api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.auth.data.LoginRequest;
import pl.edu.pw.ee.backend.api.auth.data.TokenResponse;
import pl.edu.pw.ee.backend.api.auth.interfaces.AuthController;
import pl.edu.pw.ee.backend.api.auth.interfaces.AuthService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthControllerImpl implements AuthController {

    private final AuthService authService;

    @Override
    @PostMapping("/login")
    public final TokenResponse login(LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }

}