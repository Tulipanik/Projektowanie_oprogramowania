package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.entities.dish.MealType;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;
import pl.edu.pw.ee.backend.utils.exceptions.dish.DishNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DishService implements IDishService {
    private final DishRepository dishRepository;
    private final ExternalCompanyRepository externalCompanyRepository;

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

    public List<Dish> getByFiltr(int clientId, List<MealType> mealTypes, List<String> kitchenTypes, List<String> companyNames, String mealSorting, String kitchenSorting, String companySorting) {
        return dishRepository.findDishesWithFilters(
                mealTypes,
                kitchenTypes,
                companyNames,
                mealSorting,
                kitchenSorting,
                companySorting
        );
    }

    public boolean addNewDish(Dish dish) {
        dishRepository.save(dish);
        return true;
    }
}
