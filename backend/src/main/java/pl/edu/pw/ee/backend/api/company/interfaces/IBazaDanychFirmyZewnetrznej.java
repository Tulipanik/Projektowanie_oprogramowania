package pl.edu.pw.ee.backend.api.company.interfaces;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;

public interface IBazaDanychFirmyZewnetrznej {

    int addCateringCompanyData(ExternalCompanyCreateDTO request);

    int addTransportCompanyData(ExternalCompanyCreateDTO companyData);
}
