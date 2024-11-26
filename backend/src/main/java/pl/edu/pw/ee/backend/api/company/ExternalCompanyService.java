package pl.edu.pw.ee.backend.api.company;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;

@Service
@AllArgsConstructor
public class ExternalCompanyService implements IExternalCompanyService {

    private final ExternalCompanyRepository externalCompanyRepository;

    @Override
    public int addExternalCompany(ExternalCompany externalCompany) {
        final ExternalCompany createdCompany = externalCompanyRepository.save(externalCompany);
        return createdCompany.getCompanyId();
    }
}
