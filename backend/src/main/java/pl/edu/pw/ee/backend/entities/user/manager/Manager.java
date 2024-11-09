package pl.edu.pw.ee.backend.entities.user.manager;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.user.User;

@Data
@Entity
@Table(name = "Managers")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long managerId;

    @OneToOne
    private User user;

}
