package com.tiv.presenti.cursos.dtos;

import com.tiv.presenti.cursos.models.Curso;

public record CursoResponse(
        String numRegistro,
        String nome,
        String turno,
        String campus
) {
    public static CursoResponse fromEntity(Curso curso) {
        if (curso == null) return null;
        return new CursoResponse(
                curso.getNumRegistro(),
                curso.getNome(),
                curso.getTurno(),
                curso.getCampus()
        );
    }
}