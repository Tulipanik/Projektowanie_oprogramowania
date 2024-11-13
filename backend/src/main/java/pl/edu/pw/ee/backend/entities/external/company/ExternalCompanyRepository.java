package pl.edu.pw.ee.backend.entities.external.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalCompanyRepository extends JpaRepository<ExternalCompany, Integer> {
}
