package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishMapper;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaPosilkow implements IBazaPosilkow {
    private final DishRepository dishRepository;
    private final ClientRepository clientRepository;
    private final IDishMapper dishMapper;

    @Override
    public List<FindDishDTO> getByFiltr(int clientId, FiltrDTO filtrObject) {
        log.debug("Getting dishes for client {} with filters: {}", clientId, filtrObject);

        if (!clientRepository.existsById(clientId)) {
            throw new ClientNotFoundException(clientId);
        }

        List<Dish> dishes = dishRepository.findDishesWithFilters(
                filtrObject.mealType(),
                filtrObject.kitchenType(),
                filtrObject.cateringCompanyId()
        );

        log.debug("Found {} dishes matching the criteria", dishes.size());

        return dishes.stream()
                .map(dishMapper::toFindDishDto)
                .toList();
    }
}