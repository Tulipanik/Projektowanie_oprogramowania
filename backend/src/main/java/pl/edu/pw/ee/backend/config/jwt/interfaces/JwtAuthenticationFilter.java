package pl.edu.pw.ee.backend.config.jwt.interfaces;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;

import java.io.IOException;

public interface JwtAuthenticationFilter extends Filter {

    void doFilterInternal(@NonNull HttpServletRequest request,
                          @NonNull HttpServletResponse response,
                          @NonNull FilterChain filterChain) throws ServletException, IOException;

}
