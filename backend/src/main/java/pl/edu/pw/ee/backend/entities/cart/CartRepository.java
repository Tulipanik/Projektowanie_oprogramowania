package pl.edu.pw.ee.backend.entities.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    @Modifying
    @Query(value = "DELETE FROM cart_dishes WHERE cart_id = :cart_id AND dish_id = :dish_id", nativeQuery = true)
    void deleteDishFromCart(@Param("cart_id") int cartId, @Param("dish_id") int dishId);

}
