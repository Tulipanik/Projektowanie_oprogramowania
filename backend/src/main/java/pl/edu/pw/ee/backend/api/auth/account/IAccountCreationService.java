package pl.edu.pw.ee.backend.api.auth.account;

import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.courier.Courier;
import pl.edu.pw.ee.backend.entities.user.manager.Manager;
import pl.edu.pw.ee.backend.entities.user.storekeeper.Storekeeper;

public interface IAccountCreationService {

    Client createClientAccount(AccountCreateDTO request);

    Courier createCourierAccount(AccountCreateDTO request);

    ExternalCompany createExternalCompanyAccount(ExternalCompanyCreateDTO request);

    Manager createManagerAccount(AccountCreateDTO request);

    Storekeeper createStorekeeperAccount(AccountCreateDTO request);

}
