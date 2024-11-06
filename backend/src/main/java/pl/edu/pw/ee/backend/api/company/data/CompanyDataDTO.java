package pl.edu.pw.ee.backend.api.company.data;

import lombok.Builder;
import pl.edu.pw.ee.backend.entities.catering.company.CompanyType;

@Builder
public record CompanyDataDTO(String address, int companyId, CompanyType companyType, String email,
                             String name, String NIP, String phoneNumber) {
}
