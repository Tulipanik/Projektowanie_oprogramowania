package pl.edu.pw.ee.backend.entities.courier;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Courier {

    @Id
    @GeneratedValue
    private int courierId;

    //TODO: nie wiadomo co tutaj dać

}
