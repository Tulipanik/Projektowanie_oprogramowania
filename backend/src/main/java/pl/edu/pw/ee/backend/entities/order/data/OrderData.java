package pl.edu.pw.ee.backend.entities.order.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
@Entity
@Table(name = "OrderData")
public class OrderData {

    @Id
    @GeneratedValue
    private int orderDataId;

    //TODO: change when auth is implemented
    private int clientId;

    @Email
    @Column(unique = true)
    private String email;

    private String city;

    private String comment;

    private String street;

    private String surname;

    private String zipCode;

    private String phone;

}
