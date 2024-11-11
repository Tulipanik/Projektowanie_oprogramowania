package pl.edu.pw.ee.backend.utils.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import pl.edu.pw.ee.backend.utils.exceptions.AbstractException;

import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice
public class ImagesExceptionHandler {

    @ExceptionHandler(AbstractException.class)
    public final ResponseEntity<ExceptionResponse> handleException(AbstractException exception) {
        log.error("An exception thrown: {}", exception.getClass().getSimpleName());
        log.error("An exception message: {}", exception.getLocalizedMessage());
        log.error("An exception status code: {}", exception.getStatusCode());

        ExceptionResponse response = ExceptionResponse
                .builder()
                .message(exception.getMessage())
                .statusCode(exception.getStatusCode().value())
                .status(exception.getStatusCode().toString())
                .timeStamp(LocalDateTime.now())
                .build();

        return new ResponseEntity<>(response, exception.getStatusCode());
    }

}
