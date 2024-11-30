package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.cart.data.FindDishDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.IBazaKoszyka;
import pl.edu.pw.ee.backend.api.cart.interfaces.ICartService;
import pl.edu.pw.ee.backend.api.dish.interfaces.IDishService;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.dish.Dish;
import pl.edu.pw.ee.backend.utils.exceptions.cart.CartNotFoundException;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaKoszyka implements IBazaKoszyka {
    private final ICartService cartService;
    private final IDishService dishRepository;

    @Override
    public FindDishDTO getCart(int cartId) {
        return null;
    }

    @Override
    public void addDishToCart(int cartId, int dishId) {
        log.debug("Adding dish with ID {} to cart with ID {}", dishId, cartId);

        Cart cart = cartService.findById(cartId);

        Dish dish = dishRepository.findDishById(dishId);

        cart.getDishes().add(dish);

        cartService.save(cart);

        log.debug("Dish with ID {} added to cart with ID {}", dishId, cartId);
    }

}