package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.company.data.CompanyDataDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

@Slf4j
@Component
@RequiredArgsConstructor
public class BazaDanychFirmyZewnetrznej implements IBazaDanychFirmyZewnetrznej {

    private final IExternalCompanyService externalCompanyService;

    @Override
    public int addTransportCompanyData(CompanyDataDTO companyDataDTO) {
        log.info("addTransportCompanyData " + companyDataDTO.toString());
        final ExternalCompany companyToSave = createCompanyToSave(companyDataDTO);
        return externalCompanyService.addExternalCompany(companyToSave);
    }

    private ExternalCompany createCompanyToSave(CompanyDataDTO companyDataDTO) {
        return ExternalCompany.builder()
                .address(companyDataDTO.address())
                .companyType(companyDataDTO.companyType())
                .email(companyDataDTO.email())
                .name(companyDataDTO.name())
                .NIP(companyDataDTO.NIP())
                .phoneNumber(companyDataDTO.phoneNumber())
                .build();
    }

}
