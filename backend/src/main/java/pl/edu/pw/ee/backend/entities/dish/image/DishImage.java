package pl.edu.pw.ee.backend.entities.dish.image;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class DishImage {

    @Id
    @GeneratedValue
    private int imageId;

    private String imagePath;

    private String imageUrl;

}
