package pl.edu.pw.ee.backend.config.jwt;

import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.config.jwt.interfaces.IJwtKeyService;

import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

@Component
public class JwtKeyServiceImpl implements IJwtKeyService {

    private static final String JWT_PUB_KEY = "JWT_PUB_KEY";
    private static final String JWT_PRIVATE_KEY = "JWT_PRIVATE_KEY";
    private static final String KEY_ALGORITHM = "RSA";

    private final PrivateKey signKey;
    private final PublicKey verifyKey;

    public JwtKeyServiceImpl() {
        this.signKey = buildPrivateKey();
        this.verifyKey = buildPublicKey();
    }

    @Override
    public final PrivateKey getSignKey() {
        return signKey;
    }

    @Override
    public final PublicKey getVerifyKey() {
        return verifyKey;
    }

    private PublicKey buildPublicKey() {
        String publicKeyString = System.getenv(JWT_PUB_KEY);

        return deserializePublicKey(publicKeyString);
    }

    private PublicKey deserializePublicKey(String publicKeyString) {
        try {
            byte[] encodedKey = Base64.getDecoder().decode(publicKeyString);

            return KeyFactory.getInstance(KEY_ALGORITHM).generatePublic(new X509EncodedKeySpec(encodedKey));
        } catch (InvalidKeySpecException | NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        }
    }

    private PrivateKey buildPrivateKey() {
        String privateKeyString = System.getenv(JWT_PRIVATE_KEY);

        return deserializePrivateKey(privateKeyString);
    }

    private PrivateKey deserializePrivateKey(String serializedPublicKey) {
        try {
            byte[] encodedKey = Base64.getDecoder().decode(serializedPublicKey);

            return KeyFactory.getInstance(KEY_ALGORITHM).generatePrivate(new PKCS8EncodedKeySpec(encodedKey));
        } catch (InvalidKeySpecException | NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        }
    }
}
