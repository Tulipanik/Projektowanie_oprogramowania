package pl.edu.pw.ee.backend.utils.exceptions;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record BackendExceptionResponse(String exceptionClassName, String exceptionMessage, LocalDateTime timeStamp) {
}
