package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.IBazaKoszyka;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.cart.CartRepository;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.entities.dish.DishRepository;
import pl.edu.pw.ee.backend.utils.exceptions.dish.DishNotFoundException;
import pl.edu.pw.ee.backend.utils.exceptions.cart.CartNotFoundException;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaKoszyka implements IBazaKoszyka {
    private final CartRepository cartRepository;
    private final DishRepository dishRepository;

    @Override
    public FindDishDTO getCart(int cartId) {
        return null;
    }

    @Override
    @Transactional
    public void addDishToCart(int cartId, int dishId) {
        log.debug("Adding dish with ID {} to cart with ID {}", dishId, cartId);

        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new CartNotFoundException(cartId));

        Dish dish = dishRepository.findById(dishId)
                .orElseThrow(() -> new DishNotFoundException(dishId));

        cart.getDishes().add(dish);

        cartRepository.save(cart);

        log.debug("Dish with ID {} added to cart with ID {}", dishId, cartId);
    }
}