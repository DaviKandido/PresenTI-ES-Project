package com.tiv.presenti.usuarios.DTO;

import com.tiv.presenti.usuarios.model.Tipo;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.utils.TiposUser;

public record UsuarioRequestDTO(String num_matricula, String num_pessoa, String nome, String email, String senha, TiposUser tipo) {
    public Usuario toEntity(){
        return new Usuario(this.num_matricula, this.num_pessoa, this.nome, this.email, this.senha, this.tipo);
    }
}
