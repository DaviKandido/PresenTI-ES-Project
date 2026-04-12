package com.tiv.presenti.exceptions;

import java.time.LocalDateTime;

public record ErroResponseDTO(LocalDateTime dateTime, int exceptionCode, String message) {
}
