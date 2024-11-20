package pl.edu.pw.ee.backend.api.dish.interfaces;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import java.util.List;

public interface IPosilkiAPI {
    List<FindDishDTO> getDishList(int clientId, FiltrDTO filtrObject);
    boolean addNewDish(AddDishDTO addDishDTO);

}