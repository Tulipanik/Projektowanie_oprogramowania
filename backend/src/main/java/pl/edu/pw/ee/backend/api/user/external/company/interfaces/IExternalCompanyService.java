package pl.edu.pw.ee.backend.api.user.external.company.interfaces;

import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

public interface IExternalCompanyService {

    ExternalCompany findById(int cateringCompanyId);

    ExternalCompany save(ExternalCompany externalCompany);

    int addExternalCompany(ExternalCompany externalCompany);

}
