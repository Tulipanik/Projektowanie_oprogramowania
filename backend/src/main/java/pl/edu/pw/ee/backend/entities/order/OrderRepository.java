package pl.edu.pw.ee.backend.entities.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Query("SELECT o FROM Order o WHERE o.orderData.client.clientId = :clientId")
    List<Order> findOrdersByClientId(int clientId);

}