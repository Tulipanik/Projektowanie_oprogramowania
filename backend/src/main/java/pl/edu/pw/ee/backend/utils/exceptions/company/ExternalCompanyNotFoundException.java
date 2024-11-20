package pl.edu.pw.ee.backend.utils.exceptions.company;

import org.springframework.http.HttpStatus;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.io.Serial;

public class ExternalCompanyNotFoundException extends AbstractException {
    @Serial
    private static final long serialVersionUID = -7366607077706827413L;

    private static final String COMPANY_WITH_ID = "CCompany with id: %d does not exist";


    public ExternalCompanyNotFoundException(int id) {
        super(HttpStatus.NOT_FOUND, String.format(COMPANY_WITH_ID, id));
    }
}
