package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.util.List;

public interface IDishService {

    Dish findDishById(int dishId);

    List<Dish> findAllDishesForOrderDishDTOList(List<OrderDishDTO> orderDishDTOList);
}
