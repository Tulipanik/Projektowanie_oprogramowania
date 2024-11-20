package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import java.util.List;

public interface IPosilkiAPI {
    List<FindDishDto> getDishList(int clientId, FiltrDTO filtrObject);
}