package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import java.util.List;

public interface IPosilkiAPI {
    List<FindDishDTO> getDishList(int clientId, FilterDTO filterObject);
    boolean addNewDish(AddDishDTO addDishDTO);
}