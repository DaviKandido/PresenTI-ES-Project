package com.tiv.presenti.turma_usuario.DTO;

import com.tiv.presenti.turma_usuario.model.Matricula;

public record MatriculaResponse(
        Long id,
        String nomeUsuario,
        String idTurma,
        String papel
) {
    public static MatriculaResponse fromEntity(Matricula m) {
        return new MatriculaResponse(
                m.getId(),
                m.getUsuario().getNome(),
                m.getTurma().getId(),
                m.getPapel()
        );
    }
}