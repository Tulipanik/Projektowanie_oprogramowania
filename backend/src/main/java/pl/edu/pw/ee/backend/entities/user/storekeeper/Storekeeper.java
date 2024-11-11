package pl.edu.pw.ee.backend.entities.user.storekeeper;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "Storekeepers")
public class Storekeeper {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long storekeeperId;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

}
