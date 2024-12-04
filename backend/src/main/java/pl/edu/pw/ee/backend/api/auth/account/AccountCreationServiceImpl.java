package pl.edu.pw.ee.backend.api.auth.account;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.cart.interfaces.ICartService;
import pl.edu.pw.ee.backend.entities.cart.Cart;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;
import pl.edu.pw.ee.backend.entities.user.Role;
import pl.edu.pw.ee.backend.entities.user.IUserService;
import pl.edu.pw.ee.backend.entities.user.client.Client;
import pl.edu.pw.ee.backend.entities.user.client.ClientRepository;
import pl.edu.pw.ee.backend.entities.user.courier.Courier;
import pl.edu.pw.ee.backend.entities.user.courier.CourierRepository;
import pl.edu.pw.ee.backend.entities.user.manager.Manager;
import pl.edu.pw.ee.backend.entities.user.manager.ManagerRepository;
import pl.edu.pw.ee.backend.entities.user.storekeeper.Storekeeper;
import pl.edu.pw.ee.backend.entities.user.storekeeper.StorekeeperRepository;

@Slf4j
@Service
@RequiredArgsConstructor
public class AccountCreationServiceImpl implements IAccountCreationService {

    private final ClientRepository clientRepository;
    private final CourierRepository courierRepository;
    private final ExternalCompanyRepository externalCompanyRepository;
    private final ManagerRepository managerRepository;
    private final StorekeeperRepository storekeeperRepository;
    private final IUserService userService;
    private final ICartService cartService;

    @Override
    @Transactional
    public Client createClientAccount(AccountCreateDTO request) {
        log.info("Creating client account : {}", request);

        Client client = Client
                .builder()
                .user(userService.save(request, Role.CLIENT))
                .cart(cartService.save(Cart.builder().build()))
                .balance(request.balance())
                .build();

        client = clientRepository.save(client);

        log.info("Client account created : {}", client);

        return client;
    }

    @Override
    @Transactional
    public Courier createCourierAccount(AccountCreateDTO request) {
        log.info("Creating courier account : {}", request);

        Courier courier = Courier
                .builder()
                .user(userService.save(request, Role.COURIER))
                .build();

        courier = courierRepository.save(courier);

        log.info("Courier account created : {}", courier);

        return courier;
    }

    @Override
    @Transactional
    public ExternalCompany createExternalCompanyAccount(ExternalCompanyCreateDTO request) {
        log.info("Creating catering company account : {}", request);

        ExternalCompany externalCompany = ExternalCompany
                .builder()
                .address(request.address())
                .NIP(request.NIP())
                .companyType(request.companyType())
                .phoneNumber(request.phoneNumber())
                .user(userService.save(request, Role.EXTERNAL_COMPANY))
                .build();

        externalCompany = externalCompanyRepository.save(externalCompany);

        log.info("Catering company account created : {}", externalCompany);

        return externalCompany;
    }

    @Override
    @Transactional
    public Manager createManagerAccount(AccountCreateDTO request) {
        log.info("Creating manager account : {}", request);

        Manager manager = Manager
                .builder()
                .user(userService.save(request, Role.MANAGER))
                .build();

        manager = managerRepository.save(manager);

        log.info("Manager account created : {}", manager);

        return manager;
    }

    @Override
    @Transactional
    public Storekeeper createStorekeeperAccount(AccountCreateDTO request) {
        log.info("Creating storekeeper account : {}", request);

        Storekeeper storekeeper = Storekeeper
                .builder()
                .user(userService.save(request, Role.STOREKEEPER))
                .build();

        storekeeper = storekeeperRepository.save(storekeeper);

        log.info("Storekeeper account created : {}", storekeeper);

        return storekeeper;
    }

}
