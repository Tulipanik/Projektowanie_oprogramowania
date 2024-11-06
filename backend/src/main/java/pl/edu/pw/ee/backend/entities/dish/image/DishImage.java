package pl.edu.pw.ee.backend.entities.dish.image;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "DishImages")
public class DishImage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int imageId;

    private String imagePath;

    private String imageUrl;

}
