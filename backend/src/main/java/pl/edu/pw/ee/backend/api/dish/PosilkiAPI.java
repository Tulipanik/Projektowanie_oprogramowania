package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IPosilkiAPI;

import java.util.List;

@RestController
@RequestMapping(
        value = "/api/v1/dish"
)
@RequiredArgsConstructor
public class PosilkiAPI implements IPosilkiAPI {
    private final IPosilkiAPI managerPosilkow;

    @Override
    @PostMapping(value = "/client/{clientId}")
    public List<FindDishDTO> getDishList(
            @PathVariable int clientId,
            @RequestBody(required = false) FilterDTO filterObject
    ) {
        return managerPosilkow.getDishList(clientId, filterObject);
    }

    @Override
    @PostMapping(value = "/add")
    public boolean addNewDish(@ModelAttribute AddDishDTO addDishDTO) {
        return managerPosilkow.addNewDish(addDishDTO);
    }
}