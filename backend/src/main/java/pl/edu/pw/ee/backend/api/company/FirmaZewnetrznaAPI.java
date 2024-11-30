package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;


@Order(1)
@RestController
@RequestMapping(
        value = "/api/v1/company",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class FirmaZewnetrznaAPI implements IFirmaZewnetrznaAPI {

    private final IFirmaZewnetrznaAPI managerFirmyZewnetrznej;

    @PostMapping("/addCompany")
    public boolean addNewExternalCompany(@RequestBody ExternalCompanyCreateDTO externalCompanyCreateDTO) {
        return managerFirmyZewnetrznej.addNewExternalCompany(externalCompanyCreateDTO);
    }
}
