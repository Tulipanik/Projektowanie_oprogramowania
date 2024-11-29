package pl.edu.pw.ee.backend.api.company;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.company.interfaces.IBazaDanychFirmyZewnetrznej;
import pl.edu.pw.ee.backend.api.company.interfaces.IExternalCompanyService;
import pl.edu.pw.ee.backend.entities.external.company.ExternalCompany;
import pl.edu.pw.ee.backend.entities.user.Role;
import pl.edu.pw.ee.backend.entities.user.User;

@Service
@RequiredArgsConstructor
@Slf4j
public class BazaDanychFirmyZewnetrznej implements IBazaDanychFirmyZewnetrznej {
    private final IExternalCompanyService externalService;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public int addCateringCompanyData(ExternalCompanyCreateDTO request) {
        log.info("Creating catering company account : {}", request);

        ExternalCompany externalCompany = buildExternalCompanyFromRequest(request);

        externalCompany = externalService.save(externalCompany);

        log.info("Catering company account created : {}", externalCompany);

        return externalCompany.getCompanyId();
    }

    private User buildUserFromRequest(ExternalCompanyCreateDTO request, Role role) {
        return buildUserFromRequest(request.name(), request.username(), request.password(), role);
    }

    private ExternalCompany buildExternalCompanyFromRequest(ExternalCompanyCreateDTO request) {
        return ExternalCompany
                .builder()
                .address(request.address())
                .NIP(request.NIP())
                .companyType(request.companyType())
                .phoneNumber(request.phoneNumber())
                .user(buildUserFromRequest(request, Role.EXTERNAL_COMPANY))
                .build();
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
