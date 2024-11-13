package pl.edu.pw.ee.backend.utils.images;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.utils.exceptions.dish.image.FileCouldNotBeCreatedException;
import pl.edu.pw.ee.backend.utils.images.interfaces.FileManagementService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Slf4j
@Service
public class FileManagementServiceImpl implements FileManagementService {

    @Override
    public final void saveFile(Path filePath, MultipartFile file) {
        try {
            File out = new File(filePath.toString());
            File parentDir = out.getParentFile();

            log.info("Out file: {}, Parent dir: {}", out, parentDir);

            if (!parentDir.exists()) {
                boolean isDirectoryCreated = parentDir.mkdirs();

                if (!isDirectoryCreated && !parentDir.exists()) {
                    throw new IOException("Failed to create directory: %s".formatted(parentDir.getAbsolutePath()));
                }
            }
            file.transferTo(out);

        } catch (IOException exception) {
            log.error(exception.getLocalizedMessage());

            throw new FileCouldNotBeCreatedException(String.format("File on path '%s' was not able to be created!/", filePath), exception);
        }
    }

    @Override
    public final void deleteFile(Path imagePath) {
        try {
            String imagePathString = imagePath.toString();
            File file = new File(imagePathString);

            Files.delete(file.toPath());

        } catch (IOException exception) {
            log.error(exception.getLocalizedMessage());

            throw new FileCouldNotBeCreatedException(String.format("File on path '%s' was not able to be deleted!", imagePath), exception);
        }
    }

}
