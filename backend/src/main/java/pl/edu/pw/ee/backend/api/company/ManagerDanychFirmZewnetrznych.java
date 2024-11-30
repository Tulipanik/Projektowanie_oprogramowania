package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.exception.UnknownCompanyTypeException;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;
import pl.edu.pw.ee.backend.entities.external.company.CompanyType;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

@Slf4j
@Order(2)
@Component
@RequiredArgsConstructor
public class ManagerDanychFirmZewnetrznych implements IFirmaZewnetrznaAPI {
    private final IBazaDanychFirmyZewnetrznej bazaDanychFirmyZewnetrznej;

    @Override
    public boolean addNewExternalCompany(ExternalCompanyCreateDTO companyData) {
        try {
            tryAddNewCompanyByType(companyData);
        } catch (Exception e) {
            log.error("Company cannot be added");
            return false;
        }

        return true;
    }

    private void tryAddNewCompanyByType(ExternalCompanyCreateDTO companyData) throws AbstractException {
        final CompanyType requestCompanyType = companyData.companyType();

        if (CompanyType.CATERING.equals(requestCompanyType)) {
            int id = bazaDanychFirmyZewnetrznej.addCateringCompanyData(companyData);
            log.info("Catering comapny with ID " + id + " was added.");
        } else if (CompanyType.COURIER.equals(requestCompanyType)) {
            int id = bazaDanychFirmyZewnetrznej.addTransportCompanyData(companyData);
            log.info("Transport comapny with ID " + id + " was added.");
        } else {
            throw new UnknownCompanyTypeException(requestCompanyType.toString());
        }
    }
}
