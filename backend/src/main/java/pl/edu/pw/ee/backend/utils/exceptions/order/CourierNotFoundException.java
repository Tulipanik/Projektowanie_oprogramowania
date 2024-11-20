package pl.edu.pw.ee.backend.utils.exceptions.order;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

public class CourierNotFoundException extends AbstractException {
    public CourierNotFoundException(HttpStatus status, String reason) {
        super(status, reason);
    }
}
