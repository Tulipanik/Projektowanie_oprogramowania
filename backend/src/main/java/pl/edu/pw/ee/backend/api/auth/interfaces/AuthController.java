package pl.edu.pw.ee.backend.api.auth.interfaces;

import pl.edu.pw.ee.backend.api.auth.data.LoginDTO;
import pl.edu.pw.ee.backend.api.auth.data.TokenDTO;

public interface AuthController {

    TokenDTO login(LoginDTO loginDTO);

}
