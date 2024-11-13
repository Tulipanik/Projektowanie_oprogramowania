package pl.edu.pw.ee.backend.entities.dish;

import jakarta.persistence.*;
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

    @ElementCollection
    @CollectionTable(name = "dish_ingredients", joinColumns = @JoinColumn(name = "dish_id"))
    @Column(name = "ingredient")
    private List<String> ingredients;

    @OneToOne
    @JoinColumn(name = "image_id")
    private DishImage image;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private ExternalCompany externalCompany;

    @ManyToMany(mappedBy = "dishes")
    private List<Cart> carts;

}
