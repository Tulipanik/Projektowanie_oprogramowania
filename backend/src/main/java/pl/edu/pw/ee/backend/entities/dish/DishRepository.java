package pl.edu.pw.ee.backend.entities.dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    @Query("SELECT DISTINCT d FROM Dish d WHERE " +
            "(:mealTypes IS NULL OR d.mealType IN :mealTypes) AND " +
            "(:kitchenTypes IS NULL OR d.kitchenType IN :kitchenTypes) AND " +
            "(:companyNames IS NULL OR d.externalCompany.address IN :companyNames) " +
            "ORDER BY " +
            "CASE WHEN :mealSorting = 'ASCENDING' THEN d.mealType END ASC, " +
            "CASE WHEN :mealSorting = 'DESCENDING' THEN d.mealType END DESC, " +
            "CASE WHEN :kitchenSorting = 'ASCENDING' THEN d.kitchenType END ASC, " +
            "CASE WHEN :kitchenSorting = 'DESCENDING' THEN d.kitchenType END DESC, " +
            "CASE WHEN :companySorting = 'ASCENDING' THEN d.externalCompany.address END ASC, " +
            "CASE WHEN :companySorting = 'DESCENDING' THEN d.externalCompany.address END DESC")
    List<Dish> findDishesWithFilters(
            @Param("mealTypes") List<MealType> mealTypes,
            @Param("kitchenTypes") List<String> kitchenTypes,
            @Param("companyNames") List<String> companyNames,
            @Param("mealSorting") String mealSorting,
            @Param("kitchenSorting") String kitchenSorting,
            @Param("companySorting") String companySorting
    );
}