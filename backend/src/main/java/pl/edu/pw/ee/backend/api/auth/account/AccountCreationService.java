package pl.edu.pw.ee.backend.api.auth.account;

import pl.edu.pw.ee.backend.api.auth.data.AccountRequest;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyRequest;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.courier.Courier;
import pl.edu.pw.ee.backend.entities.user.manager.Manager;
import pl.edu.pw.ee.backend.entities.user.storekeeper.Storekeeper;

public interface AccountCreationService {

    Client createClientAccount(AccountRequest request);

    Courier createCourierAccount(AccountRequest request);

    ExternalCompany createExternalCompanyAccount(ExternalCompanyRequest request);

    Manager createManagerAccount(AccountRequest request);

    Storekeeper createStorekeeperAccount(AccountRequest request);

}
