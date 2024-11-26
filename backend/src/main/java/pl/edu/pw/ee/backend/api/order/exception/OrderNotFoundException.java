package pl.edu.pw.ee.backend.api.order.exception;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

import static java.lang.String.format;

public class OrderNotFoundException extends AbstractException {

    @Serial
    private static final long serialVersionUID = 4999326098476352822L;
    private static final String ORDER_NOT_FOUND_EXCEPTION_MESSAGE = "Order with id: %d does not exist";

    public OrderNotFoundException(int id) {
        super(HttpStatus.NOT_FOUND, format(ORDER_NOT_FOUND_EXCEPTION_MESSAGE, id));
    }
}