package pl.edu.pw.ee.backend.entities.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.UserDTO;
import pl.edu.pw.ee.backend.utils.exceptions.auth.UserDoesNotExistException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public final User save(UserDTO userDTO) {
        User user = User
                .builder()
                .name(userDTO.name())
                .jwtVersion(0L)
                .username(userDTO.username())
                .password(passwordEncoder.encode(userDTO.password()))
                .role(userDTO.role())
                .build();

        return userRepository.save(user);
    }

    @Override
    public final User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public final User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(
                () -> new UserDoesNotExistException(username)
        );
    }

    @Override
    public final User findById(int id) {
        return userRepository.findById(id).orElseThrow(
                () -> new UserDoesNotExistException(id)
        );
    }

    @Override
    public final void deleteById(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public final User save(AccountCreateDTO request, Role role) {
        return save(new UserDTO(
                request.name(),
                request.username(),
                request.password(),
                role
        ));
    }

    @Override
    public final User save(ExternalCompanyCreateDTO request, Role role) {
        return save(new UserDTO(
                request.name(),
                request.username(),
                request.password(),
                role
        ));
    }

}
