package pl.edu.pw.ee.backend.api.company.exception;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

import static java.lang.String.format;

public class AddNewCompanyException extends AbstractException {

    @Serial
    private static final long serialVersionUID = 4999326098476352822L;
    private static final String ADD_NEW_COMPANY_EXCEPTION_MESSAGE = "New company with id %d cannot be added";

    public AddNewCompanyException(int id) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, format(ADD_NEW_COMPANY_EXCEPTION_MESSAGE, id));
    }
}