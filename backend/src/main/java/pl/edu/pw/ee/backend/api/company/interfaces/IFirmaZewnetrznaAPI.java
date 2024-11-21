package pl.edu.pw.ee.backend.api.company.interfaces;
import pl.edu.pw.ee.backend.api.company.data.CompanyDataDTO;

public interface IFirmaZewnetrznaAPI {

    boolean addNewExternalCompany(CompanyDataDTO companyData);
}
