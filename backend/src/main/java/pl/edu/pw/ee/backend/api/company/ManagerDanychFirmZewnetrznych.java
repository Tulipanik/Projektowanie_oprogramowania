package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;

@Order(2)
@Component
@RequiredArgsConstructor
public class ManagerDanychFirmZewnetrznych implements IFirmaZewnetrznaAPI {
    private final IBazaDanychFirmyZewnetrznej bazaDanychFirmyZewnetrznej;

    @Override
    public int addNewExternalCompany(ExternalCompanyCreateDTO companyData) {
        return bazaDanychFirmyZewnetrznej.addCateringCompanyData(companyData);
    }
}
