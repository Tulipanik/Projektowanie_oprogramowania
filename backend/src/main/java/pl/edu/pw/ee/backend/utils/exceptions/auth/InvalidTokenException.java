package pl.edu.pw.ee.backend.utils.exceptions.auth;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class InvalidTokenException extends AbstractException {

    @Serial
    private static final long serialVersionUID = 2384137801317432740L;

    public InvalidTokenException(String message) {
        super(HttpStatus.BAD_REQUEST, message);
    }

}
