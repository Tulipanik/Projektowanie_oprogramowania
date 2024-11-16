package pl.edu.pw.ee.backend.api.auth;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.config.jwt.interfaces.IJwtService;
import pl.edu.pw.ee.backend.entities.user.User;
import pl.edu.pw.ee.backend.entities.user.UserRepository;
import pl.edu.pw.ee.backend.utils.exceptions.auth.InvalidTokenException;
import pl.edu.pw.ee.backend.utils.exceptions.auth.UserDoesNotExistException;

import java.util.Optional;


@Slf4j
@Service
@RequiredArgsConstructor
public class LogoutServiceImpl implements LogoutHandler {

    private final IJwtService jwtService;
    private final UserRepository userRepository;

    @Override
    public final void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        Optional<String> jwtOpt = jwtService.getJwtTokenFromRequest(request);

        if (jwtOpt.isEmpty()) {
            log.warn("Auth header is null or it does not contain Bearer token");

            response.setStatus(HttpServletResponse.SC_FORBIDDEN);

            return;
        }
        String jwt = jwtOpt.get();
        User user = getUserFromToken(jwt);

        long jwtVersion = getJwtVersionFromToken(jwt);

        if (jwtVersion != user.getJwtVersion()) {
            throw new InvalidTokenException("Jwt version is not equal to user's jwt version!");
        }
        log.info("User : {} is logging out!", user.getUsername());

        jwtService.revokeUserTokens(user);

        SecurityContextHolder.clearContext();
    }

    private User getUserFromToken(String jwt) {
        Optional<String> usernameOptional = jwtService.getClaimFromToken(jwt, Claims::getSubject);

        if (usernameOptional.isEmpty()) {
            throw new InvalidTokenException("Username is not present in token!");
        }
        String username = usernameOptional.get();

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UserDoesNotExistException(username));
    }

    private long getJwtVersionFromToken(String jwt) {
        Optional<Long> jwtVersionOptional = jwtService.getJwtVersionClaimFromToken(jwt);

        if (jwtVersionOptional.isEmpty()) {
            throw new InvalidTokenException("Jwt version is not present in token!");
        }
        return jwtVersionOptional.get();
    }

}
