package pl.edu.pw.ee.backend.entities.client;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
@Entity
public class Client {

    @Id
    @GeneratedValue
    private int clientId;

    @Email
    @Column(unique = true)
    private String email;

    private String city;

    private String comments;

    private String street;

    private String surname;

    private String zipCode;

    private String phone;

}
