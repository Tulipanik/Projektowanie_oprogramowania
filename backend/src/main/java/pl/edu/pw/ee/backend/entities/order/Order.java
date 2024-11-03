package pl.edu.pw.ee.backend.entities.order;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.client.Client;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Order {

    @Id
    @GeneratedValue
    private int orderId;

    private LocalDate orderDate;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    @OneToOne
    private Client client;

    @OneToMany
    private List<Dish> dishes;

}
