package com.tiv.presenti.presenca.DTO;

import com.tiv.presenti.presenca.model.Presenca;

public record PresencaDTO(String id, String id_usuario, boolean presente) {
    public static PresencaDTO fromEntity(Presenca presenca){
        return new PresencaDTO(presenca.getId(), presenca.getId_usuario(), presenca.isPresente());
    }
}
