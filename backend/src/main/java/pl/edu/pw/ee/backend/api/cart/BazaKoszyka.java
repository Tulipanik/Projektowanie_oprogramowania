package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.IBazaKoszyka;
import pl.edu.pw.ee.backend.api.cart.interfaces.ICartService;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.dish.Dish;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaKoszyka implements IBazaKoszyka {
    private final ICartService cartService;
    private final IDishService dishService;

    @Override
    public List<FindDishDTO> getCart(int cartId) {
        log.debug("Looking for cart with id: {}", cartId);
        final Cart cart = cartService.findById(cartId);
        final List<Dish> cartsDishes = cart.getDishes();

        return mapToFindDishDTO(cartsDishes);
    }

    private List<FindDishDTO> mapToFindDishDTO(List<Dish> cartsDishes) {
        return cartsDishes.stream()
                .map(dish -> FindDishDTO.builder()
                        .dishId(dish.getDishId())
                        .name(dish.getName())
                        .calories(dish.getCalories())
                        .mealType(dish.getMealType())
                        .kitchenType(dish.getKitchenType())
                        .price(dish.getPrice())
                        .ingredients(dish.getIngredients())
                        .photoLink(dish.getImage().getImageUrl())
                        .companyName(dish.getExternalCompany().getName())
                        .build())
                .toList();
    }

    @Override
    public void addDishToCart(int cartId, int dishId) {
        log.debug("Adding dish with ID {} to cart with ID {}", dishId, cartId);

        Cart cart = cartService.findById(cartId);

        Dish dish = dishService.findDishById(dishId);

        cart.getDishes().add(dish);

        cartService.save(cart);

        log.debug("Dish with ID {} added to cart with ID {}", dishId, cartId);
    }

    @Override
    public void removeDishFromCart(int cartId, int dishId) {
        log.debug("Removing dish with ID {} from cart with ID {}", dishId, cartId);

        Cart cart = cartService.findById(cartId);

        Dish dish = dishService.findDishById(dishId);

        cartService.removeDishFromCart(cart, dish);

        log.debug("Dish with ID {} removed from cart with ID {}", dishId, cartId);
    }

}