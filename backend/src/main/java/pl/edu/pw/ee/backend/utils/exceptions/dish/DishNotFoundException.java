package pl.edu.pw.ee.backend.utils.exceptions.dish;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.BackendException;

public class DishNotFoundException extends BackendException {
    private static final String DISH_WITH_ID = "Dish with id: %d does not exist";

    public DishNotFoundException(int id) {
        super(String.format(DISH_WITH_ID, id), HttpStatus.NOT_FOUND);
    }
}
