package pl.edu.pw.ee.backend.utils.images;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.dish.image.DishImageRepository;
import pl.edu.pw.ee.backend.utils.images.interfaces.FileManagementService;
import pl.edu.pw.ee.backend.utils.images.interfaces.ImageService;

import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private static final String IMAGE_VOLUME_PATH = "/etc/nginx/html/images";
    private static final String IMAGE_URL_PATH = "http://localhost:4000/images";

    private final FileManagementService fileManagementService;
    private final DishImageRepository dishImageRepository;

    @Override
    @Transactional
    public DishImage saveImage(MultipartFile image) {
        String newFilename = String.format("%s_%s", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), image.getOriginalFilename());
        Path imagePath = Path.of(IMAGE_VOLUME_PATH, newFilename);

        log.info("Image path: {}", imagePath);

        DishImage dishImage = DishImage
                .builder()
                .imagePath(imagePath.toString())
                .imageUrl(Path.of(IMAGE_URL_PATH, newFilename).toString())
                .build();

        DishImage savedImage = dishImageRepository.save(dishImage);

        log.info("Saved image: {}", savedImage);

        fileManagementService.saveFile(imagePath, image);

        return savedImage;
    }

    @Override
    @Transactional
    public boolean removeImage(DishImage image) {
        if (image == null) {
            return false;
        }
        dishImageRepository.delete(image);

        log.info("Image removed: {}", image);

        return true;
    }

}
