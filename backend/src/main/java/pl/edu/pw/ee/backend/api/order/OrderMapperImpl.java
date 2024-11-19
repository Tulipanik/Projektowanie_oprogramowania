package pl.edu.pw.ee.backend.api.order;


import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderMapper;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;

import java.time.LocalDate;

@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public final OrderDTO toOrderDTO(Order order) {
        return OrderDTO.builder()
                .orderData(toOrderDataDTO(order.getOrderData()))
                .meals(order.getDishes().stream()
                        .map(dish -> toOrderDishDTO(order.getOrderDate(), dish))
                        .toList())
                .build();
    }

    @Override
    public final OrderDataDTO toOrderDataDTO(OrderData orderData) {
        return OrderDataDTO.builder()
                .city(orderData.getCity())
                .clientId(orderData.getClient().getClientId())
                .email(orderData.getEmail())
                .name(orderData.getName())
                .street(orderData.getStreet())
                .surname(orderData.getSurname())
                .zipCode(orderData.getZipCode())
                .comment(orderData.getComment())
                .build();
    }

    @Override
    public final OrderDishDTO toOrderDishDTO(LocalDate orderDate, Dish dish) {
        return OrderDishDTO.builder()
                .date(orderDate)
                .dish(toFindDishDTO(dish))
                .build();
    }

    @Override
    public final FindDishDto toFindDishDTO(Dish dish) {
        return FindDishDto.builder()
                .calories(dish.getCalories())
                .companyName(dish.getExternalCompany().getAddress())
                .dishId(dish.getDishId())
                .ingredients(dish.getIngredients())
                .kitchenType(dish.getKitchenType())
                .mealType(dish.getMealType())
                .name(dish.getName())
                .photoLink(dish.getImage().getImageUrl())
                .price(dish.getPrice())
                .build();
    }
}