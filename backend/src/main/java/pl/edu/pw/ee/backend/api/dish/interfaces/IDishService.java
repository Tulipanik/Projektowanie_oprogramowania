package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.util.List;

public interface IDishService {

    Dish findDishById(int dishId);

    List<Dish> findAllDishesForOrderDishDTOList(List<OrderDishDTO> orderDishDTOList);

    List<FindDishDTO> getByFiltr(int clientId, FilterDTO filterObject);

    boolean addNewDish(AddDishDTO dishDTO);
}
