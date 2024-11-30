package pl.edu.pw.ee.backend.api.dish;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.api.dish.interfaces.IPosilkiAPI;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ManagerPosilkow implements IPosilkiAPI {
    private final IBazaPosilkow bazaPosilkow;

    @Override
    public List<FindDishDTO> getDishList(int clientId, FilterDTO filterObject) {
        return bazaPosilkow.getByFiltr(clientId, filterObject != null ? filterObject :
                FilterDTO.builder().build());
    }

    @Override
    public boolean addNewDish(AddDishDTO addDishDTO) {
        return bazaPosilkow.addNewDish(addDishDTO);
    }
}
