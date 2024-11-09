package pl.edu.pw.ee.backend.entities.user.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LawDepartmentRepository extends JpaRepository<LawDepartment, Long> {
}
