package pl.edu.pw.ee.backend.api.user.client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.user.client.interfaces.IClientService;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.utils.exceptions.user.client.ClientNotFoundException;


@Service
@RequiredArgsConstructor
public class ClientService implements IClientService {
    private final ClientRepository clientRepository;


    @Override
    public Client findClientById(int id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new ClientNotFoundException(id));
    }

    @Override
    public boolean existsById(int id){
        return clientRepository.existsById(id);
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }
}
