package pl.edu.pw.ee.backend.utils.exceptions.user.client;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.BackendException;

public class ClientNotFoundException extends BackendException {
    private static final String CLIENT_WITH_ID = "Client with id: %d does not exist";

    public ClientNotFoundException(long id) {
        super(String.format(CLIENT_WITH_ID, id), HttpStatus.NOT_FOUND);
    }
}
