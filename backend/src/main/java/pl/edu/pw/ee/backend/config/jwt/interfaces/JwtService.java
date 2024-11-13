package pl.edu.pw.ee.backend.config.jwt.interfaces;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import pl.edu.pw.ee.backend.entities.user.User;

import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

public interface JwtService {

    Optional<Long> getJwtVersionClaimFromToken(String jwtToken);

    <T> Optional<T> getClaimFromToken(String jwtToken, Function<Claims, T> claimsHandler);

    Optional<String> getJwtTokenFromRequest(HttpServletRequest request);

    String generateToken(User userDetails);

    String generatePasswordRefreshToken(User userDetails);

    String generateRefreshToken(User userDetails);

    String generateToken(Map<String, Object> additionalClaims, User userDetails, long expiration);

    boolean isTokenNotValid(String jwtToken);

    User revokeUserTokens(User user);

    String generateKafkaJwtToken();

}
