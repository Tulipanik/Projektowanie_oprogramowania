package pl.edu.pw.ee.backend.entities.external.company;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.user.User;

import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ExternalCompanies")
public class ExternalCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int companyId;

    private String address;

    @Enumerated(EnumType.ORDINAL)
    private CompanyType companyType;

    private String email;

    private String name;

    private String NIP;

    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany
    @JoinColumn(name = "company_id")
    private List<Dish> companyDishes;

}
