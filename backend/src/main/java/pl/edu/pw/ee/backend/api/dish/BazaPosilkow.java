package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaPosilkow implements IBazaPosilkow {
    private final IDishService dishService;

    @Override
    public List<FindDishDTO> getByFiltr(int clientId, FilterDTO filterObject) {
        log.debug("Getting dishes for client {} with filters: {}", clientId, filterObject);
        return dishService.getByFiltr(clientId, filterObject);
    }

    @Override
    public boolean addNewDish(AddDishDTO dishDTO) {
        log.debug("Adding new dish: {}", dishDTO);
        return dishService.addNewDish(dishDTO);
    }
}