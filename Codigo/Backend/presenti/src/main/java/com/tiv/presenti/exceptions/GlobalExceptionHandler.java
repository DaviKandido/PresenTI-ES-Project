package com.tiv.presenti.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErroResponseDTO> handleResourceNotFound(ResourceNotFoundException ex, HttpServletRequest request) {

        ErroResponseDTO erro = new ErroResponseDTO(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(erro);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErroResponseDTO> handleGenericException(Exception ex, HttpServletRequest request) {
        ErroResponseDTO erro = new ErroResponseDTO(
                LocalDateTime.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde: " + ex.getMessage()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(erro);
    }

    
    @ExceptionHandler(org.springframework.security.access.AccessDeniedException.class)
    public ResponseEntity<ErroResponseDTO> handleAccessDeniedException(org.springframework.security.access.AccessDeniedException ex, HttpServletRequest request) {
        ErroResponseDTO erro = new ErroResponseDTO(
                LocalDateTime.now(),
                HttpStatus.FORBIDDEN.value(),
                "Acesso negado. Você não tem permissão para acessar este recurso: " + ex.getMessage()
        );
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(erro);
    }
}