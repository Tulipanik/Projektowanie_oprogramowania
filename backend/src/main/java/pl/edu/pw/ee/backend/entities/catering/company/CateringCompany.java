package pl.edu.pw.ee.backend.entities.catering.company;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.user.User;

import java.util.List;

@Data
@Entity
@Table(name = "CateringCompanies")
public class CateringCompany {

    @Id
    private int companyId;

    private String address;

    @Enumerated(EnumType.ORDINAL)
    private CompanyType companyType;

    private String NIP;

    private String phoneNumber;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany
    @JoinColumn(name = "company_id")
    private List<Dish> companyDishes;

}
