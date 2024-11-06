package pl.edu.pw.ee.backend.entities.dish.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishImageRepository extends JpaRepository<DishImage, Integer> {
}
