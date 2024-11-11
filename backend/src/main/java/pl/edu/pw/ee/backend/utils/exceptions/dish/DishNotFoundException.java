package pl.edu.pw.ee.backend.utils.exceptions.dish;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class DishNotFoundException extends AbstractException {
    @Serial
    private static final long serialVersionUID = 4999326098476352826L;

    private static final String DISH_WITH_ID = "Dish with id: %d does not exist";


    public DishNotFoundException(int id) {
        super(HttpStatus.NOT_FOUND, String.format(DISH_WITH_ID, id));
    }
}
