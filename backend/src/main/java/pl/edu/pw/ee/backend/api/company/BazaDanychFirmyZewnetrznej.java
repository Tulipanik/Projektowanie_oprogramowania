package pl.edu.pw.ee.backend.api.company;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompanyRepository;
import pl.edu.pw.ee.backend.entities.user.Role;
import pl.edu.pw.ee.backend.entities.user.User;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaDanychFirmyZewnetrznej implements IBazaDanychFirmyZewnetrznej {
    private final ExternalCompanyRepository externalCompanyRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public int addCateringCompanyData(ExternalCompanyCreateDTO request) {
        log.info("Creating catering company account : {}", request);

        ExternalCompany externalCompany = ExternalCompany
                .builder()
                .address(request.address())
                .NIP(request.NIP())
                .companyType(request.companyType())
                .phoneNumber(request.phoneNumber())
                .user(buildUserFromRequest(request, Role.EXTERNAL_COMPANY))
                .build();

        externalCompany = externalCompanyRepository.save(externalCompany);

        log.info("Catering company account created : {}", externalCompany);

        return externalCompany.getCompanyId();
    }

    private User buildUserFromRequest(ExternalCompanyCreateDTO request, Role role) {
        return buildUserFromRequest(request.name(), request.username(), request.password(), role);
    }

    private User buildUserFromRequest(AccountCreateDTO request, Role role) {
        return buildUserFromRequest(request.name(), request.username(), request.password(), role);
    }

    private User buildUserFromRequest(String name, String username, String password, Role role) {
        return User
                .builder()
                .name(name)
                .jwtVersion(0L)
                .username(username)
                .password(passwordEncoder.encode(password))
                .role(role)
                .build();
    }
}
