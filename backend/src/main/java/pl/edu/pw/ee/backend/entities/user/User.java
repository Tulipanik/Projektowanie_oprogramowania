package pl.edu.pw.ee.backend.entities.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;

@Entity
public class User {

    @Id
    @GeneratedValue
    private int userId;

    @Email
    private String username;

    private String name;

    private String password;

    private Role role;

}
