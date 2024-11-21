package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;

import java.time.LocalDate;

public interface OrderMapper {
    OrderDTO toOrderDTO(Order order);

    OrderDataDTO toOrderDataDTO(OrderData orderData);

    OrderDishDTO toOrderDishDTO(LocalDate orderDate, Dish dish);

    FindDishDTO toFindDishDTO(Dish dish);
}
