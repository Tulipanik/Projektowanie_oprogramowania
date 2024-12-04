package pl.edu.pw.ee.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.edu.pw.ee.backend.api.auth.account.IAccountCreationService;
import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.entities.external.company.CompanyType;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;

@SpringBootApplication
public class BackendApplication {

    private static final String PASSWORD = "123";

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(IAccountCreationService accountCreationService) {
        return args -> {
            AccountCreateDTO request = AccountCreateDTO
                    .builder()
                    .name("John Doe")
                    .username("john.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createCourierAccount(request);

            request = AccountCreateDTO
                    .builder()
                    .name("Marie Doe")
                    .username("marie.doe@gmail.com")
                    .password(PASSWORD)
                    .balance(1000.0f)
                    .build();

            accountCreationService.createClientAccount(request);

            request = AccountCreateDTO
                    .builder()
                    .name("Jane Doe")
                    .username("jane.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createManagerAccount(request);

            request = AccountCreateDTO
                    .builder()
                    .name("Jack Doe")
                    .username("jack.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createStorekeeperAccount(request);

            ExternalCompanyCreateDTO cateringCompany = ExternalCompanyCreateDTO
                    .builder()
                    .name("Ropucha")
                    .username("ropucha@staw.pl")
                    .password(PASSWORD)
                    .NIP("1234567890")
                    .companyType(CompanyType.CATERING)
                    .address("ul. Staw 1, 00-000 Warszawa")
                    .phoneNumber("123456789")
                    .build();

            accountCreationService.createExternalCompanyAccount(cateringCompany);

            ExternalCompanyCreateDTO courierCompany = ExternalCompanyCreateDTO
                    .builder()
                    .name("OutPost")
                    .username("outpost@niepaczkomat.pl")
                    .password(PASSWORD)
                    .NIP("1234567890")
                    .companyType(CompanyType.CATERING)
                    .address("ul. Paczkomatowa 1, 00-000 Warszawa")
                    .phoneNumber("523456789")
                    .build();

            accountCreationService.createExternalCompanyAccount(courierCompany);


        };
    }

}
