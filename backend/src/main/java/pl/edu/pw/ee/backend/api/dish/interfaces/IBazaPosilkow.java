package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import java.util.List;

public interface IBazaPosilkow {
    List<FindDishDTO> getByFiltr(int clientId, FilterDTO filterObject);
    boolean addNewDish(AddDishDTO dish);
}