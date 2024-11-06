package pl.edu.pw.ee.backend.entities.catering.company;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
@Entity
@Table(name = "CateringCompanies")
public class CateringCompany {

    @Id
    private int companyId;

    private String name;

    private String address;

    @Email
    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.ORDINAL)
    private CompanyType companyType;

    private String nip;

    private String phoneNumber;

}
