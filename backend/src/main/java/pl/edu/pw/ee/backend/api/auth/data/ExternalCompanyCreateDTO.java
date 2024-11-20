package pl.edu.pw.ee.backend.api.auth.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.external.company.CompanyType;

@Builder
public record ExternalCompanyCreateDTO(String name, String password, String username, String NIP, CompanyType companyType,
                                       String phoneNumber, String address) {
}
