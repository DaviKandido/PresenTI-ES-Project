package com.tiv.presenti.cursos.dtos;

import com.tiv.presenti.cursos.models.Curso;
import jakarta.validation.constraints.NotBlank;

public record CursoRequest(
        @NotBlank String numRegistro,
        @NotBlank String nome,
        @NotBlank String turno,
        @NotBlank String campus
) {
    public Curso toEntity() {
        return new Curso(numRegistro, nome, turno, campus);
    }
}