package pl.edu.pw.ee.backend.api.user.external.company;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.user.external.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;
import pl.edu.pw.ee.backend.utils.exceptions.company.ExternalCompanyNotFoundException;


@Service
@RequiredArgsConstructor
public class ExternalCompanyService implements IExternalCompanyService {
    private final ExternalCompanyRepository externalCompanyRepository;

    @Override
    public int addExternalCompany(ExternalCompany externalCompany) {
        ExternalCompany createdCompany = externalCompanyRepository.save(externalCompany);
        return createdCompany.getCompanyId();
    }

    @Override
    public ExternalCompany findById(int cateringCompanyId) {
        return externalCompanyRepository.findById(cateringCompanyId)
                .orElseThrow(() -> new ExternalCompanyNotFoundException(cateringCompanyId));
    }

    @Override
    public ExternalCompany save(ExternalCompany externalCompany) {
        return externalCompanyRepository.save(externalCompany);
    }

}
