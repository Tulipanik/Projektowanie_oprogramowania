package pl.edu.pw.ee.backend.entities.dish;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;
import pl.edu.pw.ee.backend.entities.catering.company.CateringCompany;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;

@Data
@Entity
public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int dishId;

    private String name;

    private int calories;

    @Enumerated(EnumType.STRING)
    private MealType mealType;

    @Enumerated(EnumType.STRING)
    private KitchenType kitchenType;

    private float price;

    private String ingredients;

    @OneToOne
    @JoinColumn(name = "image_id")
    private DishImage image;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private CateringCompany cateringCompany;

}
