package pl.edu.pw.ee.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.edu.pw.ee.backend.api.auth.account.AccountCreationService;
import pl.edu.pw.ee.backend.api.auth.data.AccountRequest;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyRequest;
import pl.edu.pw.ee.backend.entities.external.company.CompanyType;

@SpringBootApplication
public class BackendApplication {

    private static final String PASSWORD = "123";

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(AccountCreationService accountCreationService) {
        return args -> {
            AccountRequest request = AccountRequest
                    .builder()
                    .name("John Doe")
                    .username("john.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createCourierAccount(request);

            request = AccountRequest
                    .builder()
                    .name("Marie Doe")
                    .username("marie.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createClientAccount(request);

            request = AccountRequest
                    .builder()
                    .name("Jane Doe")
                    .username("jane.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createManagerAccount(request);

            request = AccountRequest
                    .builder()
                    .name("Jack Doe")
                    .username("jack.doe@gmail.com")
                    .password(PASSWORD)
                    .build();

            accountCreationService.createStorekeeperAccount(request);

            ExternalCompanyRequest cateringCompany = ExternalCompanyRequest
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

            ExternalCompanyRequest courierCompany = ExternalCompanyRequest
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
