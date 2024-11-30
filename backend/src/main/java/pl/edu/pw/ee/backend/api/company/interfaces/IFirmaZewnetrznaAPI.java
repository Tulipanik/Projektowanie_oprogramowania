package pl.edu.pw.ee.backend.api.company.interfaces;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;

public interface IFirmaZewnetrznaAPI {

    int addNewExternalCompany(ExternalCompanyCreateDTO companyData);
}
