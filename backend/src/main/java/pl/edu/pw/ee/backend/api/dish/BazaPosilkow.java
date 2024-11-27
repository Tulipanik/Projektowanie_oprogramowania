package pl.edu.pw.ee.backend.api.dish;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.AddDishDTO;
import pl.edu.pw.ee.backend.api.cart.data.FilterDTO;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.dish.interfaces.IBazaPosilkow;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishMapper;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.api.user.client.interfaces.IClientService;
import pl.edu.pw.ee.backend.api.user.external.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.MealType;
import pl.edu.pw.ee.backend.entities.dish.image.DishImage;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;
import pl.edu.pw.ee.backend.utils.images.ImageServiceImpl;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaPosilkow implements IBazaPosilkow {
    private final IDishService dishService;
    private final IClientService clientService;
    private final IExternalCompanyService externalCompanyService;
    private final IDishMapper dishMapper;
    private final ImageServiceImpl imageService;

    @Override
    public List<FindDishDTO> getByFiltr(int clientId, FilterDTO filterObject) {
        log.debug("Getting dishes for client {} with filters: {}", clientId, filterObject);

        if (!clientService.existsById(clientId)) {
            throw new ClientNotFoundException(clientId);
        }

        List<MealType> mealTypes = filterObject.mealFilter() != null ?
                filterObject.mealFilter().values() : null;
        List<String> kitchenTypes = filterObject.kitchenFilter() != null ?
                filterObject.kitchenFilter().values() : null;
        List<String> companyNames = filterObject.companyFilter() != null ?
                filterObject.companyFilter().values() : null;

        String mealSorting = filterObject.mealFilter() != null ?
                filterObject.mealFilter().sorting().name() : null;
        String kitchenSorting = filterObject.kitchenFilter() != null ?
                filterObject.kitchenFilter().sorting().name() : null;
        String companySorting = filterObject.companyFilter() != null ?
                filterObject.companyFilter().sorting().name() : null;

        List<Dish> dishes = dishService.getByFiltr(clientId, mealTypes, kitchenTypes, companyNames, companySorting, mealSorting, kitchenSorting);

        return dishes.stream()
                .map(dishMapper::toFindDishDto)
                .toList();
    }

    @Override
    public boolean addNewDish(AddDishDTO dishDTO) {
        log.debug("Adding new dish: {}", dishDTO);
        ExternalCompany externalCompany = externalCompanyService.findById(dishDTO.cateringCompanyId());
        DishImage image = imageService.saveImage(dishDTO.photo());
        Dish newDish = dishMapper.toDish(dishDTO, externalCompany, image);

        return dishService.addNewDish(newDish);
    }
}