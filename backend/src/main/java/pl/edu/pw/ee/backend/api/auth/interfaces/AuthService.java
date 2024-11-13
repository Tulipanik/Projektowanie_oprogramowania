package pl.edu.pw.ee.backend.api.auth.interfaces;

import pl.edu.pw.ee.backend.api.auth.data.LoginRequest;
import pl.edu.pw.ee.backend.api.auth.data.TokenResponse;

public interface AuthService {

    TokenResponse login(LoginRequest loginRequest);

    TokenResponse refreshToken(String refreshToken);

}
