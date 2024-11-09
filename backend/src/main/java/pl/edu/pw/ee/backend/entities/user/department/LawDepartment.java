package pl.edu.pw.ee.backend.entities.user.department;

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
@Table(name = "LawDepartments")
public class LawDepartment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long lawDepartmentId;

    @OneToOne
    private User user;

}
