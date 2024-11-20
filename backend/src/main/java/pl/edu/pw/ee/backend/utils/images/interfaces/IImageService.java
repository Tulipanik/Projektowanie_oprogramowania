package pl.edu.pw.ee.backend.utils.images.interfaces;

import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;

public interface IImageService {

    DishImage saveImage(MultipartFile image);

    boolean removeImage(DishImage image);

}
