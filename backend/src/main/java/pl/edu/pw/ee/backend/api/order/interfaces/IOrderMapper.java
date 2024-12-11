package pl.edu.pw.ee.backend.api.order.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.order.data.*;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;

import java.time.LocalDate;

public interface IOrderMapper {
    OrderDTO toOrderDTO(Order order);

    OrderDataDTO toOrderDataDTO(OrderData orderData);

    OrderDishDTO toOrderDishDTO(LocalDate orderDate, Dish dish);

    FindDishDTO toFindDishDTO(Dish dish);

    OrdersCourierDataDTO toOrdersCourierDataDTO(Order order, int courierId);

    StoreKeeperOrderDTO toStoreKeeperOrderDTO(Order order);
}
