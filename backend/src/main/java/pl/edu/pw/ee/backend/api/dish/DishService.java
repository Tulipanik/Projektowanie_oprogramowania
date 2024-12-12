package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.query.SortDirection;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.SortingKey;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.entities.dish.MealType;
import pl.edu.pw.ee.backend.utils.exceptions.dish.DishNotFoundException;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DishService implements IDishService {
    private final DishRepository dishRepository;

    @Override
    public Dish findDishById(int dishId) {
        return dishRepository.findById(dishId)
                .orElseThrow(() -> new DishNotFoundException(dishId));
    }

    @Override
    public List<Dish> findAllDishesForOrderDishDTOList(List<OrderDishDTO> orderDishDTOList) {
        return orderDishDTOList.stream()
                .map(meal ->
                        dishRepository.findById(meal.dish().dishId())
                                .orElseThrow(() -> new DishNotFoundException(meal.dish().dishId())))
                .toList();
    }

    @Override
    public List<Dish> getByFiltr(int clientId, List<MealType> mealTypes, List<String> kitchenTypes,
                                 List<String> companyNames, SortingKey sortingKey, SortDirection sorting) {
        log.info("Filtering with parameters: mealTypes={}, kitchenTypes={}, companyNames={}, sortingKey={}, sorting={}",
                mealTypes, kitchenTypes, companyNames, sortingKey, sorting);

        List<Dish> results = dishRepository.findDishesWithFilters(
                mealTypes,
                kitchenTypes,
                companyNames,
                sortingKey != null ? sortingKey.name() : null,
                sorting != null ? sorting.name() : null
        );

        log.info("Found {} results", results.size());
        results.forEach(dish -> log.info("Dish: id={}, name={}, type={}",
                dish.getDishId(), dish.getName(), dish.getMealType()));

        return results;
    }

    @Override
    public boolean addNewDish(Dish dish) {
        dishRepository.save(dish);
        return true;
    }
}
