package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.company.data.CompanyDataDTO;
import pl.edu.pw.ee.backend.api.company.exception.AddNewCompanyException;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;

@Slf4j
@Service
@RequiredArgsConstructor
public class ManagerDanychFirmZewnetrznych implements IFirmaZewnetrznaAPI {

    private final IBazaDanychFirmyZewnetrznej bazaDanychFirmyZewnetrznej;

    @Override
    public boolean addNewExternalCompany(CompanyDataDTO companyDataDTO) {
        try {
            final int id = bazaDanychFirmyZewnetrznej.addTransportCompanyData(companyDataDTO);
            log.info("New transport company with id " + id + " was added.");
            return true;
        } catch (AddNewCompanyException e) {
            log.error("An error occurred while adding new transport company. Details: " + e.getMessage());
            return false;
        }
    }
}
