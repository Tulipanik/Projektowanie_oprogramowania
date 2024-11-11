package pl.edu.pw.ee.backend.utils.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
@Slf4j
public class BackendExceptionHandler {

    private static final String EXCEPTION_OCCURRED_MESSAGE = "Exception occurred with status: {} and response: {}";

    @ExceptionHandler(BackendException.class)
    public final ResponseEntity<BackendExceptionResponse> handleBackendException(BackendException e) {
        BackendExceptionResponse response = buildExceptionResponse(e);

        log.error(EXCEPTION_OCCURRED_MESSAGE, e.getStatusCode(), response);
        log.error("", e);

        return ResponseEntity.status(e.getStatusCode()).body(response);
    }

    private BackendExceptionResponse buildExceptionResponse(BackendException e) {
        return BackendExceptionResponse.builder()
                .exceptionClassName(e.getClass().getSimpleName())
                .exceptionMessage(e.getMessage())
                .timeStamp(LocalDateTime.now())
                .build();
    }
}
