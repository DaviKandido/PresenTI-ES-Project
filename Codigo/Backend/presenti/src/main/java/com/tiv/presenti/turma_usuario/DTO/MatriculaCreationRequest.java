package com.tiv.presenti.turma_usuario.DTO;
import com.tiv.presenti.turma_usuario.model.Matricula;
import jakarta.validation.constraints.NotBlank;

public record MatriculaCreationRequest(
        @NotBlank String idUsuario,
        @NotBlank String idTurma,
        @NotBlank String papel
) {
}
