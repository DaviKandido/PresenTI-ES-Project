package com.tiv.presenti.sessao.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tiv.presenti.sessao.model.Sessao;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record SessaoDTO(

        String id,

        @JsonProperty("id_turma")
        @NotBlank(message = "id_turma é obrigatório")
        String idTurma,

        String token,

        LocalDateTime timestamp,

        String status

) {
    public static SessaoDTO fromEntity(Sessao sessao) {
        return new SessaoDTO(
                sessao.getId(),
                sessao.getIdTurma(),
                sessao.getToken(),
                sessao.getTimestamp(),
                sessao.getStatus()
        );
    }
}