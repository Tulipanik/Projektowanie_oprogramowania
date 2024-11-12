package pl.edu.pw.ee.backend.config.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.config.constants.Headers;
import pl.edu.pw.ee.backend.config.constants.Matchers;
import pl.edu.pw.ee.backend.config.jwt.constants.JwtClaims;
import pl.edu.pw.ee.backend.config.jwt.constants.TokenType;
import pl.edu.pw.ee.backend.config.jwt.interfaces.JwtKeyService;
import pl.edu.pw.ee.backend.config.jwt.interfaces.JwtService;
import pl.edu.pw.ee.backend.entities.user.User;
import pl.edu.pw.ee.backend.entities.user.UserRepository;
import pl.edu.pw.ee.backend.utils.exceptions.auth.InvalidTokenException;
import pl.edu.pw.ee.backend.utils.exceptions.auth.UserDoesNotExistException;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Slf4j
@Service
public class JwtServiceImpl implements JwtService {

    private static final String EXPIRATION_PROPERTY = "${spring.security.jwt.expiration-time}";
    private static final String REFRESH_PROPERTY = "${spring.security.jwt.refresh-time}";
    private static final long PASSWORD_REFRESH_TOKEN_TIME = 600_000L;
    private static final long KAFKA_EXPIRATION_TIME = Long.MAX_VALUE / 2L;

    private final long expirationTime;
    private final long refreshTime;
    private final JwtKeyService jwtKeyService;
    private final UserRepository userRepository;

    public JwtServiceImpl(JwtKeyService jwtKeyService, UserRepository userRepository,
                          @Value(REFRESH_PROPERTY) long refreshTime,
                          @Value(EXPIRATION_PROPERTY) long expirationTime) {
        this.jwtKeyService = jwtKeyService;
        this.userRepository = userRepository;
        this.refreshTime = refreshTime;
        this.expirationTime = expirationTime;
    }

    @Override
    public final User revokeUserTokens(User user) {
        user.incrementJwtVersion();

        User updatedUser = userRepository.save(user);

        log.info("User with revoked tokens : {}", updatedUser);

        return updatedUser;
    }

    @Override
    public final String generateKafkaJwtToken() {
        User user = User
                .builder()
                .username("kafka@social365.com")
                .jwtVersion(0L)
                .userId(-1)
                .build();

        return buildToken(buildMinimumClaimsForUser(user), user, KAFKA_EXPIRATION_TIME);
    }

    @Override
    public final Optional<Long> getJwtVersionClaimFromToken(String jwtToken) {
        return getClaimFromToken(jwtToken, claim -> claim.get(JwtClaims.JWT_VERSION, Long.class));
    }

    @Override
    public final boolean isTokenNotValid(String jwtToken) {
        if (!isSignatureValid(jwtToken)) {
            return true;
        }
        String username = getClaimFromToken(jwtToken, Claims::getSubject)
                .orElseThrow(() -> new InvalidTokenException("Token does not have subject in payload!"));

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UserDoesNotExistException(username));

        return isTokenExpired(jwtToken, user);
    }

    @Override
    public final <T> Optional<T> getClaimFromToken(String jwtToken, Function<Claims, T> claimsHandler) {
        Claims claims = getAllClaims(jwtToken);

        return Optional.ofNullable(claimsHandler.apply(claims));
    }

    @Override
    public final String generateRefreshToken(User userDetails) {
        return buildToken(buildMinimumClaimsForUser(userDetails), userDetails, refreshTime);
    }

    @Override
    public final String generateToken(User userDetails) {
        return generateToken(buildMinimumClaimsForUser(userDetails), userDetails, expirationTime);
    }

    @Override
    public final String generatePasswordRefreshToken(User userDetails) {
        Map<String, Object> claims = new HashMap<>(buildMinimumClaimsForUser(userDetails));

        claims.put(JwtClaims.PASSWORD_RESET, true);

        return generateToken(claims, userDetails, PASSWORD_REFRESH_TOKEN_TIME);
    }

    @Override
    public final String generateToken(Map<String, Object> additionalClaims, User userDetails, long expiration) {
        return buildToken(additionalClaims, userDetails, expiration);
    }

    @Override
    public final Optional<String> getJwtTokenFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(Headers.AUTH_HEADER);

        if (!isValidAuthHeader(request)) {
            return Optional.empty();
        }
        return Optional.of(authHeader.substring(Headers.TOKEN_START_INDEX));
    }

    private boolean isSignatureValid(CharSequence jwtToken) {
        Jws<Claims> claimsJws = parseJwsClaims(jwtToken);

        if (!claimsJws.getHeader().get(JwtClaims.TOKEN_TYPE).equals(TokenType.JWT.toString())) {
            return false;
        }
        return claimsJws.getHeader().getAlgorithm().equals(Jwts.SIG.RS512.toString());
    }

    private Claims getAllClaims(CharSequence token) {
        return parseJwsClaims(token).getPayload();
    }

    private Jws<Claims> parseJwsClaims(CharSequence token) {
        return Jwts
                .parser()
                .verifyWith(jwtKeyService.getVerifyKey())
                .build()
                .parseSignedClaims(token);
    }

    private String buildToken(Map<String, Object> additionalClaims, UserDetails userDetails, long expiration) {
        long time = System.currentTimeMillis();

        return Jwts
                .builder()
                .claims(additionalClaims)
                .subject(userDetails.getUsername())
                .header()
                .add(JwtClaims.TOKEN_TYPE, TokenType.JWT.name())
                .and()
                .issuer(JwtClaims.TOKEN_ISSUER)
                .issuedAt(new Date(time))
                .expiration(new Date(time + expiration))
                .signWith(jwtKeyService.getSignKey())
                .compact();
    }

    private boolean isValidAuthHeader(HttpServletRequest request) {
        String authHeader = request.getHeader(Headers.AUTH_HEADER);
        String servletPath = request.getServletPath();

        if (authHeader == null || !authHeader.startsWith(Headers.TOKEN_HEADER)) {
            return false;
        }
        return servletPath.contains(Matchers.AUTH_MAPPING);
    }

    private boolean isTokenExpired(String token, User userDetails) {
        if (getExpirationDateFromToken(token).before(new Date())) {
            return true;
        }
        Optional<Long> jwtVersion = getJwtVersionClaimFromToken(token);

        log.info("Jwt version : {}", jwtVersion);

        if (jwtVersion.isEmpty()) {
            throw new InvalidTokenException("Token does not have jwtVersion in payload!");
        }
        long version = jwtVersion.get();

        log.info("User version : {}", userDetails.getJwtVersion());

        return version != userDetails.getJwtVersion();
    }

    private Map<String, Object> buildMinimumClaimsForUser(User userDetails) {
        return Map.of(
                JwtClaims.JWT_VERSION, userDetails.getJwtVersion(),
                JwtClaims.USER_ID, userDetails.getUserId(),
                JwtClaims.ROLE, userDetails.getRole().name()
        );
    }

    private Date getExpirationDateFromToken(String token) {
        Optional<Date> optionalDate = getClaimFromToken(token, Claims::getExpiration);

        if (optionalDate.isEmpty()) {
            throw new InvalidTokenException("Token without expiration date does not exists!");
        }
        return optionalDate.get();
    }

}
