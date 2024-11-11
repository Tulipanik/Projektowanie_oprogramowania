package pl.edu.pw.ee.backend.utils.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public abstract class BackendException extends ResponseStatusException {

    protected BackendException(String message) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message);
    }

    protected BackendException(String message, HttpStatus status) {
        super(status, message);
    }
}
