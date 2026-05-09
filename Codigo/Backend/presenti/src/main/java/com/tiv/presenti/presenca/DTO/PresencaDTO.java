package com.tiv.presenti.presenca.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tiv.presenti.presenca.model.Presenca;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PresencaDTO(

        String id,

        @JsonProperty("id_usuario")
        @NotBlank(message = "id_usuario é obrigatório")
        String idUsuario,

        @JsonProperty("id_sessao")
        @NotBlank(message = "id_sessao é obrigatório")
        String idSessao,

        @NotNull(message = "presente é obrigatório")
        Boolean presente

) {
    public static PresencaDTO fromEntity(Presenca presenca) {
        return new PresencaDTO(
                presenca.getId(),
                presenca.getIdUsuario(),
                presenca.getIdSessao(),
                presenca.isPresente()
        );
    }
}