package pl.edu.pw.ee.backend.api.dish.interfaces;

import org.hibernate.query.SortDirection;
import pl.edu.pw.ee.backend.api.cart.data.SortingKey;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.MealType;

import java.util.List;

public interface IDishService {

    Dish findDishById(int dishId);

    List<Dish> findAllDishesForOrderDishDTOList(List<OrderDishDTO> orderDishDTOList);

    List<Dish> getByFiltr(int clientId, List<MealType> mealTypes, List<String> kitchenTypes,
                          List<String> companyNames, SortingKey sortingKey, SortDirection sorting);

    boolean addNewDish(Dish dish);
}
