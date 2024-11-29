package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;

@Service
@RequiredArgsConstructor
public class ExternalCompanyServiceImpl implements IExternalCompanyService {

    private final ExternalCompanyRepository externalCompanyRepository;

    @Override
    public ExternalCompany save(ExternalCompany externalCompany) {
        return externalCompanyRepository.save(externalCompany);
    }

}
