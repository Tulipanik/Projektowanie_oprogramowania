package pl.edu.pw.ee.backend.utils.images.interfaces;

import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;

public interface IFileManagementService {

    void saveFile(Path filePath, MultipartFile file);

    void deleteFile(Path imagePath);

}
