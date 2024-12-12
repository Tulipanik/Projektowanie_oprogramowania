package pl.edu.pw.ee.backend.entities.dish.image;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@Entity
@Table(name = "DishImages")
@AllArgsConstructor
@NoArgsConstructor
public class DishImage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int imageId;

    private String imagePath;

    private String imageUrl;

}
