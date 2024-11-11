package pl.edu.pw.ee.backend.config.jwt.interfaces;

import java.security.PrivateKey;
import java.security.PublicKey;

public interface JwtKeyService {

    PrivateKey getSignKey();

    PublicKey getVerifyKey();

}
