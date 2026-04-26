package com.tiv.presenti.usuarios.DTO;

import com.tiv.presenti.usuarios.model.Usuario;

public record UsuarioResponseDTO(String num_matricula, String nome, String email, String num_pessoa) {
    public static UsuarioResponseDTO fromEntity(Usuario usuario){
        return new UsuarioResponseDTO(usuario.getNumMatricula(), usuario.getNome(), usuario.getEmail(), usuario.getNumPessoa());
    }
}
