package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.api.dish.interfaces.IPosilkiAPI;

import java.util.List;

@RestController
@RequestMapping(
        value = "/api/v1/cart",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor
public class PosilkiAPI implements IPosilkiAPI {
    private final IBazaPosilkow dishService;

    @Override
    @GetMapping(
            value = "/client/{clientId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<FindDishDTO> getDishList(
            @PathVariable int clientId,
            @RequestBody(required = false) FiltrDTO filtrObject
    ) {
        return dishService.getByFiltr(clientId, filtrObject != null ? filtrObject : FiltrDTO.builder().build());
    }

    @Override
    @PostMapping(
            value = "/add",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public boolean addNewDish(@RequestBody AddDishDTO addDishDTO) {
        return dishService.addNewDish(addDishDTO);
    }
}