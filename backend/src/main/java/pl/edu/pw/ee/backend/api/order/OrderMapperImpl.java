package pl.edu.pw.ee.backend.api.order;


import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDataDTO;
import pl.edu.pw.ee.backend.api.order.data.OrderDishDTO;
import pl.edu.pw.ee.backend.api.order.data.OrdersCourierDataDTO;
import pl.edu.pw.ee.backend.api.order.data.StoreKeeperOrderDTO;
import pl.edu.pw.ee.backend.api.order.interfaces.IOrderMapper;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.Order;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;

import java.time.LocalDate;

@Component
public class OrderMapperImpl implements IOrderMapper {

    @Override
    public final OrderDTO toOrderDTO(Order order) {
        return OrderDTO.builder()
                .clientData(toOrderDataDTO(order.getOrderData()))
                .meals(order.getDishes().stream()
                        .map(dish -> toOrderDishDTO(order.getOrderDate(), dish))
                        .toList())
                .orderDate(order.getOrderDate())
                .orderId(order.getOrderId())
                .price(order.getDishes().stream()
                        .map(Dish::getPrice)
                        .reduce(0.0f, Float::sum))
                .status(order.getOrderStatus())
                .build();
    }

    @Override
    public final OrderDataDTO toOrderDataDTO(OrderData orderData) {
        return OrderDataDTO.builder()
                .city(orderData.getCity())
                .clientId(orderData.getClient().getClientId())
                .comment(orderData.getComment())
                .email(orderData.getEmail())
                .name(orderData.getName())
                .phone(orderData.getPhone())
                .street(orderData.getStreet())
                .surname(orderData.getSurname())
                .zipCode(orderData.getZipCode())
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
    public final FindDishDTO toFindDishDTO(Dish dish) {
        return FindDishDTO.builder()
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

    @Override
    public OrdersCourierDataDTO toOrdersCourierDataDTO(Order order, int courierId) {
        OrderData orderData = order.getOrderData();

        return OrdersCourierDataDTO.builder()
                .address(String.format("%s %s %s", orderData.getStreet(), orderData.getZipCode(), orderData.getCity()))
                .clientName(orderData.getName())
                .clientSurname(orderData.getSurname())
                .courierId(courierId)
                .mealList(order.getDishes().stream()
                        .map(this::toFindDishDTO)
                        .toList())
                .orderId(order.getOrderId())
                .orderStatus(order.getOrderStatus())
                .phoneNumber(orderData.getPhone())
                .build();
    }

    @Override
    public StoreKeeperOrderDTO toStoreKeeperOrderDTO(Order order) {
        return StoreKeeperOrderDTO.builder()
                .orderId(order.getOrderId())
                .meals(order.getDishes().stream()
                        .map(Dish::getName)
                        .toList())
                .mealsIds(order.getDishes().stream()
                        .map(Dish::getDishId)
                        .toList())
                .build();
    }
}