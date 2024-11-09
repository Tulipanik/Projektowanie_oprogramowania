package pl.edu.pw.ee.backend.entities.cart;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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

    @OneToMany
    @JoinColumn(name = "dish_id")
    private List<Dish> dishes;

}
