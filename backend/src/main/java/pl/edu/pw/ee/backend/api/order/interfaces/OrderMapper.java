package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;
import pl.edu.pw.ee.backend.entities.user.client.Client;

import java.time.LocalDate;
import java.util.List;

public interface OrderMapper {
    OrderDTO toOrderDTO(Order order);

    OrderDataDTO toOrderDataDTO(Order order);

    OrderDishDTO toOrderDishDTO(LocalDate orderDate, Dish dish);

    FindDishDto toFindDishDTO(Dish dish);
}
