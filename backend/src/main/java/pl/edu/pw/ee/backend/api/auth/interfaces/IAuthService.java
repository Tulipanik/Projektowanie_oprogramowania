package pl.edu.pw.ee.backend.api.auth.interfaces;

import pl.edu.pw.ee.backend.api.auth.data.LoginDTO;
import pl.edu.pw.ee.backend.api.auth.data.TokenDTO;

public interface IAuthService {

    TokenDTO login(LoginDTO loginDTO);

    TokenDTO refreshToken(String refreshToken);

}

