package pl.edu.pw.ee.backend.entities.user.storekeeper;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.user.User;

@Data
@Entity
@Table(name = "Storekeepers")
public class Storekeeper {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long storekeeperId;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

}
