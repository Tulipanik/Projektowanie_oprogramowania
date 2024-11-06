package pl.edu.pw.ee.backend.entities.catering.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CateringCompanyRepository extends JpaRepository<CateringCompany, Integer> {
}
