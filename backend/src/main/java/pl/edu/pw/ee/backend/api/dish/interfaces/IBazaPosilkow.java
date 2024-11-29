package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;

import java.util.List;

public interface IBazaPosilkow {
    List<FindDishDTO> getByFiltr(int clientId, FiltrDTO filtrObject);
    boolean addNewDish(AddDishDTO dish);
}