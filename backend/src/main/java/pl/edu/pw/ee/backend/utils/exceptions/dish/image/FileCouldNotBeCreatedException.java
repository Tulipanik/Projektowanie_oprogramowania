package pl.edu.pw.ee.backend.utils.exceptions.dish.image;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class FileCouldNotBeCreatedException extends AbstractException {

    @Serial
    private static final long serialVersionUID = -3739234899396130772L;

    public FileCouldNotBeCreatedException(String message, Exception exception) {
        super(HttpStatus.BAD_REQUEST, message, exception);
    }

}
