package pl.edu.pw.ee.backend.entities.order;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.order.data.OrderData;

import java.time.LocalDate;
import java.util.List;

@Data
@Table(name = "Orders")
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderId;

    private LocalDate orderDate;

    @Enumerated(EnumType.ORDINAL)
    private OrderStatus orderStatus;

    @OneToOne
    @JoinColumn(name = "order_data_id")
    private OrderData orderData;

    @OneToMany
    @JoinColumn(name = "dish_id")
    private List<Dish> dishes;

}
