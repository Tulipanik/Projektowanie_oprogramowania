package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDto;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IPosilkiAPI;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/dishes")
@RequiredArgsConstructor
public class PosilkiAPI implements IPosilkiAPI {
    private final IBazaPosilkow dishService;

    @Override
    @GetMapping(
            value = "/client/{clientId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<FindDishDto> getDishList(
            @PathVariable int clientId,
            @RequestBody(required = false) FiltrDTO filtrObject
    ) {
        return dishService.getByFiltr(clientId, filtrObject != null ? filtrObject : FiltrDTO.builder().build());
    }
}