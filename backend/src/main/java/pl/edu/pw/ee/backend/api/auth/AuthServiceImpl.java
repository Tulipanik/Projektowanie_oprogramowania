package pl.edu.pw.ee.backend.api.auth;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.auth.data.LoginRequest;
import pl.edu.pw.ee.backend.api.auth.data.TokenResponse;
import pl.edu.pw.ee.backend.api.auth.interfaces.AuthService;
import pl.edu.pw.ee.backend.config.constants.TokenRevokeStatus;
import pl.edu.pw.ee.backend.config.jwt.interfaces.JwtService;
import pl.edu.pw.ee.backend.entities.user.User;
import pl.edu.pw.ee.backend.entities.user.UserRepository;
import pl.edu.pw.ee.backend.utils.exceptions.InvalidTokenException;
import pl.edu.pw.ee.backend.utils.exceptions.TokenDoesNotExistException;
import pl.edu.pw.ee.backend.utils.exceptions.UserDoesNotExistException;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private static final String USER_NOT_EXIST_MESSAGE = "Such user does not exist!";

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        log.info("Logging user with data: \n{}", loginRequest);

        String username = loginRequest.username();

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UserDoesNotExistException(username)
        );

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.username(), loginRequest.password())
        );

        return buildTokensIntoResponse(user, TokenRevokeStatus.TO_REVOKE);
    }

    @Override
    public TokenResponse refreshToken(String refreshToken) {
        log.info("Refresh token : {}", refreshToken);

        User user = validateRefreshTokenData(refreshToken);
        String authToken = jwtService.generateToken(user);

        log.info("New auth token : {}\nFor user : {}", authToken, user);

        jwtService.revokeUserTokens(user);

        return buildTokensIntoResponse(authToken, refreshToken);
    }

    private User validateRefreshTokenData(String refreshToken) {
        if (refreshToken == null) {
            throw new TokenDoesNotExistException("Token does not exist!");
        }
        Optional<String> usernameOptional = jwtService.getClaimFromToken(refreshToken, Claims::getSubject);

        if (usernameOptional.isEmpty()) {
            throw new InvalidTokenException(USER_NOT_EXIST_MESSAGE);
        }
        String username = usernameOptional.get();

        log.info("User of username : {}", username);

        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new UserDoesNotExistException(username)
        );

        if (jwtService.isTokenNotValid(refreshToken)) {
            throw new InvalidTokenException("Token is not valid!");
        }
        return user;
    }

    private TokenResponse buildTokensIntoResponse(User user, TokenRevokeStatus shouldBeRevoked) {
        User jwtUser = null;

        if (shouldBeRevoked == TokenRevokeStatus.TO_REVOKE) {
            jwtUser = jwtService.revokeUserTokens(user);
        }
        String authToken = jwtService.generateToken(jwtUser);
        String refreshToken = jwtService.generateRefreshToken(jwtUser);

        return buildTokensIntoResponse(authToken, refreshToken);
    }

    private TokenResponse buildTokensIntoResponse(String authToken, String refreshToken) {
        return TokenResponse
                .builder()
                .authToken(authToken)
                .refreshToken(refreshToken)
                .build();
    }

}
