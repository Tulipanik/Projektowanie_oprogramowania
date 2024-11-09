package pl.edu.pw.ee.backend.entities.user.storekeeper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StorekeeperRepository extends JpaRepository<Storekeeper, Long> {
}
