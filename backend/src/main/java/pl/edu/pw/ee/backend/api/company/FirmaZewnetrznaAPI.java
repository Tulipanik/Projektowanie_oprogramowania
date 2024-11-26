package pl.edu.pw.ee.backend.api.company;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.company.data.CompanyDataDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IFirmaZewnetrznaAPI;

@RestController
@RequestMapping(
        value = "/api/v1/company",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@Slf4j
@RequiredArgsConstructor
public class FirmaZewnetrznaAPI implements IFirmaZewnetrznaAPI {

    private final IFirmaZewnetrznaAPI firmaZewnetrznaAPI;

    @Override
    @PostMapping("/add")
    public boolean addNewExternalCompany(@RequestBody CompanyDataDTO companyDataDTO) {
        log.info("addNewExternalCompany: /add");
        return firmaZewnetrznaAPI.addNewExternalCompany(companyDataDTO);
    }
}
