package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.utils.exceptions.dish.DishNotFoundException;

import java.util.List;

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
}
