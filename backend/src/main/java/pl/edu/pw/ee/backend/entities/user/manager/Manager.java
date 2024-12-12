package pl.edu.pw.ee.backend.entities.user.manager;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pw.ee.backend.entities.user.User;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Managers")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long managerId;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

}
