package pl.edu.pw.ee.backend.entities.dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    @Query("SELECT d FROM Dish d WHERE " +
            "(:mealType IS NULL OR d.mealType = :mealType) AND " +
            "(:kitchenType IS NULL OR d.kitchenType = :kitchenType) AND " +
            "(:companyId IS NULL OR d.externalCompany.companyId = :companyId)")
    List<Dish> findDishesWithFilters(
            @Param("mealType") MealType mealType,
            @Param("kitchenType") String kitchenType,
            @Param("companyId") Integer companyId
    );
}