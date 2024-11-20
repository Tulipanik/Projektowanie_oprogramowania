package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.data.FiltrDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishMapper;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.utils.exceptions.company.ExternalCompanyNotFoundException;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;
import pl.edu.pw.ee.backend.utils.images.ImageServiceImpl;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaPosilkow implements IBazaPosilkow {
    private final DishRepository dishRepository;
    private final ClientRepository clientRepository;
    private final IDishMapper dishMapper;
    private final ExternalCompanyRepository externalCompanyRepository;
    private final ImageServiceImpl imageService;

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

    @Override
    public boolean addNewDish(AddDishDTO dishDTO) {
        log.debug("Adding new dish: {}", dishDTO);

        ExternalCompany externalCompany = externalCompanyRepository.findById(dishDTO.cateringCompanyId())
                .orElseThrow(() -> new ExternalCompanyNotFoundException(dishDTO.cateringCompanyId()));

        DishImage image = imageService.saveImage(dishDTO.photo());

        Dish newDish = dishMapper.toDish(dishDTO, externalCompany, image);

        dishRepository.save(newDish);
        log.debug("Dish successfully added with ID: {}", newDish.getDishId());
        return true;
    }




}