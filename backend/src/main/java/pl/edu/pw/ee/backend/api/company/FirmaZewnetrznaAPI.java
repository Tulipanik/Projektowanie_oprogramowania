package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;


@RestController
@RequestMapping(
        value = "/api/v1/company",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class FirmaZewnetrznaAPI implements IFirmaZewnetrznaAPI {

    private final IBazaDanychFirmyZewnetrznej bazaDanychFirmyZewnetrznej;

    @PostMapping("/addCompany")
    public int addNewExternalCompany(@RequestBody ExternalCompanyCreateDTO externalCompanyCreateDTO) {
        return bazaDanychFirmyZewnetrznej.addCateringCompanyData(externalCompanyCreateDTO);
    }
}
