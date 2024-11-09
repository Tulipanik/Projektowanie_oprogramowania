package pl.edu.pw.ee.backend.entities.user.department;

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
@Table(name = "LawDepartments")
public class LawDepartment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long lawDepartmentId;

    @OneToOne
    private User user;

}
