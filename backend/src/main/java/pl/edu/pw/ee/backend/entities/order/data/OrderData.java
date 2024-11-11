package pl.edu.pw.ee.backend.entities.order.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pw.ee.backend.entities.user.client.Client;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "OrderData")
public class OrderData {

    @Id
    @GeneratedValue
    private int orderDataId;

    @Email
    @Column(unique = true)
    private String email;

    private String city;

    private String comment;

    private String street;

    private String name;

    private String surname;

    private String zipCode;

    private String phone;

    @OneToOne
    @JoinColumn(name = "client_id")
    private Client client;

}
