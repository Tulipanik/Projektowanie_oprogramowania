package pl.edu.pw.ee.backend.entities.cart;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.util.List;

@Data
@Entity
public class Cart {

    @Id
    @GeneratedValue
    private int cartId;

    @OneToMany
    private List<Dish> dishes;

}
