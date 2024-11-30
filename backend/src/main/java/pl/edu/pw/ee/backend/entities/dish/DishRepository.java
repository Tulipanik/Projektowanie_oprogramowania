package pl.edu.pw.ee.backend.entities.dish;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    @Query("""
        SELECT d FROM Dish d
        WHERE (:mealTypes IS NULL OR d.mealType IN :mealTypes)
        AND (:kitchenTypes IS NULL OR d.kitchenType IN :kitchenTypes)
        AND (:companyNames IS NULL OR d.externalCompany.address IN :companyNames)
        ORDER BY 
        CASE 
            WHEN :sortingKey = 'COMPANY_NAME' AND :sorting = 'ASCENDING' THEN d.externalCompany.address
        END ASC,
        CASE 
            WHEN :sortingKey = 'COMPANY_NAME' AND :sorting = 'DESCENDING' THEN d.externalCompany.address
        END DESC,
        CASE 
            WHEN :sortingKey = 'KITCHEN_TYPE' AND :sorting = 'ASCENDING' THEN d.kitchenType
        END ASC,
        CASE 
            WHEN :sortingKey = 'KITCHEN_TYPE' AND :sorting = 'DESCENDING' THEN d.kitchenType
        END DESC,
        CASE 
            WHEN :sortingKey = 'MEAL_TYPE' AND :sorting = 'ASCENDING' THEN d.mealType
        END ASC,
        CASE 
            WHEN :sortingKey = 'MEAL_TYPE' AND :sorting = 'DESCENDING' THEN d.mealType
        END DESC
        """)
    List<Dish> findDishesWithFilters(
            @Param("mealTypes") List<MealType> mealTypes,
            @Param("kitchenTypes") List<String> kitchenTypes,
            @Param("companyNames") List<String> companyNames,
            @Param("sortingKey") String sortingKey,
            @Param("sorting") String sorting
    );
}