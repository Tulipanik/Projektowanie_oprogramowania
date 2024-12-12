package pl.edu.pw.ee.backend.utils.exceptions.cart;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class CartNotFoundException extends AbstractException {
    @Serial
    private static final long serialVersionUID = 4771326068465152822L;

    private static final String CART_WITH_ID = "Cart with id: %d does not exist";


    public CartNotFoundException(int id) {
        super(HttpStatus.NOT_FOUND, String.format(CART_WITH_ID, id));
    }
}
