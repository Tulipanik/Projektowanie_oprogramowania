package pl.edu.pw.ee.backend.api.order;


import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.OrderMapper;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;

import java.time.LocalDate;

@Component
public class OrderMapperImpl implements OrderMapper {

    @Override
    public final OrderDTO toOrderDTO(Order order) {
        return OrderDTO.builder()
                .orderData(toOrderDataDTO(order))
                .meals(order.getDishes().stream()
                        .map(dish -> toOrderDishDTO(order.getOrderDate(), dish))
                        .toList())
                .build();
    }

    @Override
    public final OrderDataDTO toOrderDataDTO(Order order) {
        return OrderDataDTO.builder()
                .city(order.getOrderData().getCity())
                .clientId(order.getOrderData().getClient().getClientId())
                .email(order.getOrderData().getEmail())
                .name(order.getOrderData().getName())
                .orderDate(order.getOrderDate().toString())
                .orderId(order.getOrderId())
                .phoneNumber(order.getOrderData().getPhone())
                .price(order.getDishes().stream()
                        .map(Dish::getPrice)
                        .reduce(0.0f, Float::sum))
                .street(order.getOrderData().getStreet())
                .surname(order.getOrderData().getSurname())
                .zipCode(order.getOrderData().getZipCode())
                .comment(order.getOrderData().getComment())
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
                .companyName(dish.getCateringCompany().getAddress())
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