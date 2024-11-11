package pl.edu.pw.ee.backend.entities.dish;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;

import java.util.List;

@Data
@Builder
@Entity
@AllArgsConstructor
@Table(name = "Dishes")
@NoArgsConstructor
public class Dish {

    @Id
    @Column(name = "dish_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int dishId;

    private String name;

    private int calories;

    @Enumerated(EnumType.ORDINAL)
    private MealType mealType;

    private String kitchenType;

    private float price;

    private String ingredients;

    @OneToOne
    @JoinColumn(name = "image_id")
    private DishImage image;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private ExternalCompany externalCompany;

    @ManyToMany(mappedBy = "dishes")
    private List<Cart> carts;

}
