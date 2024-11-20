package pl.edu.pw.ee.backend.utils.exceptions.order;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

public class OrderNotFoundException extends AbstractException {
    public OrderNotFoundException(HttpStatus status, String reason) {
        super(status, reason);
    }
}
