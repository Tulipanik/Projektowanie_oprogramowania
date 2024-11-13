package pl.edu.pw.ee.backend.utils.exceptions.auth;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class TokenDoesNotExistException extends AbstractException {

    @Serial
    private static final long serialVersionUID = -3677127531617118398L;

    public TokenDoesNotExistException(String message) {
        super(HttpStatus.NOT_FOUND, message);
    }

}
