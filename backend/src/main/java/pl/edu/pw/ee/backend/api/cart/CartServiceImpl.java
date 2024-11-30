package pl.edu.pw.ee.backend.api.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.cart.interfaces.ICartService;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.cart.CartRepository;
import pl.edu.pw.ee.backend.utils.exceptions.cart.CartNotFoundException;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements ICartService {

    private final CartRepository cartRepository;

    @Override
    public Cart findById(int cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new CartNotFoundException(cartId));
    }

    @Override
    public Cart save(Cart cart) {
        return cartRepository.save(cart);
    }
}
