package pl.edu.pw.ee.backend.api.dish.interfaces;

import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import java.util.List;

public interface IBazaPosilkow {
    List<FindDishDto> getByFiltr(int clientId, FiltrDTO filtrObject);
}