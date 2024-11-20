package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import java.util.List;

public interface IPosilkiAPI {
    List<FindDishDTO> getDishList(int clientId, FiltrDTO filtrObject);
}