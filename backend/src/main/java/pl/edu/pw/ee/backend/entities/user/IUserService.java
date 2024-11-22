package pl.edu.pw.ee.backend.entities.user;

import pl.edu.pw.ee.backend.api.auth.data.AccountCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.ExternalCompanyCreateDTO;
import pl.edu.pw.ee.backend.api.auth.data.UserDTO;

public interface IUserService {

    User save(UserDTO userDTO);

    User save(User user);

    User findByUsername(String username);

    User findById(int id);

    void deleteById(int id);

    User save(AccountCreateDTO request, Role role);

    User save(ExternalCompanyCreateDTO request, Role role);
}
