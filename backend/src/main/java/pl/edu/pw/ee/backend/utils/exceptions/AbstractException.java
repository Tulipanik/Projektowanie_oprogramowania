package pl.edu.pw.ee.backend.utils.exceptions;

import org.springframework.http.HttpStatus;

import java.io.Serial;

public abstract class AbstractException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 8192572744204878359L;

    private final HttpStatus status;

    AbstractException(HttpStatus status, String reason, Exception exception) {
        super(reason, exception);

        this.status = status;
    }

    AbstractException(HttpStatus status, String reason) {
        super(reason);

        this.status = status;
    }

    public final HttpStatus getStatusCode() {
        return status;
    }
}
