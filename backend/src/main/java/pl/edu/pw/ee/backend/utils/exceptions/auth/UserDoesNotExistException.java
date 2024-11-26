package pl.edu.pw.ee.backend.utils.exceptions.auth;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class UserDoesNotExistException extends AbstractException {

    @Serial
    private static final long serialVersionUID = -4268637137006817600L;

    public UserDoesNotExistException(int id) {
        super(HttpStatus.NOT_FOUND, String.format("User with id: %d does not exist!", id));
    }

    public UserDoesNotExistException(String username) {
        super(HttpStatus.NOT_FOUND, String.format("User with username: %s does not exist!", username));
    }

}
