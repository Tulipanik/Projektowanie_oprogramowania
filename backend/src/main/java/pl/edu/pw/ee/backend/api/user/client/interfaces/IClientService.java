package pl.edu.pw.ee.backend.api.user.client.interfaces;

import pl.edu.pw.ee.backend.entities.user.client.Client;

public interface IClientService {

    Client findClientById(int id);
    boolean existsById(int id);
    Client save(Client client);
}
