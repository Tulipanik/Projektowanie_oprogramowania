package pl.edu.pw.ee.backend.api.company;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.company.data.CompanyDataDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaDanychFirmyZewnetrznej implements IBazaDanychFirmyZewnetrznej {
    private final ExternalCompanyRepository externalCompanyRepository;

    @Override
    @Transactional
    public int addCateringCompanyData(CompanyDataDTO companyData) {
        log.debug("Checking if company with Id {} already exists", companyData.companyId());
        boolean companyExists = externalCompanyRepository.existsById(companyData.companyId());
        if (companyExists) {
            log.debug("Company with Id {} already exists", companyData.companyId());
            return 0;
        }
        else {
            ExternalCompany externalCompany = companyDataDTOtoExternalCompany(companyData);
            externalCompanyRepository.save(externalCompany);
            return externalCompany.getCompanyId();
        }
    }

    private ExternalCompany companyDataDTOtoExternalCompany(CompanyDataDTO companyDataDTO) {
        return ExternalCompany.builder()
                .NIP(companyDataDTO.NIP())
                .companyType(companyDataDTO.companyType())
                .address(companyDataDTO.address())
                .phoneNumber(companyDataDTO.phoneNumber())
                .build();
    }
}
