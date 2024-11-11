package pl.edu.pw.ee.backend.entities.cart;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@Table(name = "Carts")
@AllArgsConstructor
public class Cart {

    @Id
    @GeneratedValue
    private int cartId;

    @ManyToMany
    @JoinTable(
            name = "cart_dishes",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "dish_id")
    )
    private List<Dish> dishes;

}
