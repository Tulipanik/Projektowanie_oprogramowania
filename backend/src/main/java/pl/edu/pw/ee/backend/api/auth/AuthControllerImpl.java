package pl.edu.pw.ee.backend.api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.auth.data.LoginDTO;
import pl.edu.pw.ee.backend.api.auth.data.TokenDTO;
import pl.edu.pw.ee.backend.api.auth.interfaces.AuthController;
import pl.edu.pw.ee.backend.api.auth.interfaces.AuthService;

@RestController
@RequiredArgsConstructor
@RequestMapping(
        value = "/api/v1/auth",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class AuthControllerImpl implements AuthController {

    private final AuthService authService;

    @Override
    @PostMapping("/login")
    public final TokenDTO login(LoginDTO loginDTO) {
        return authService.login(loginDTO);
    }

}
