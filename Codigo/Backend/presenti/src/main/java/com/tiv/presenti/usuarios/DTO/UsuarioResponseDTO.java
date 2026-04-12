package com.tiv.presenti.usuarios.DTO;

import com.tiv.presenti.usuarios.model.Usuario;

public record UsuarioResponseDTO(String num_matricula, String nome, String email) {
    public static UsuarioResponseDTO fromEntity(Usuario usuario){
        return new UsuarioResponseDTO(usuario.getId(), usuario.getNome(), usuario.getEmail());
    }
}
