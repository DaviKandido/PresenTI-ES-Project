package com.tiv.presenti.usuarios.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.persistence.UsuariosRepository;

@Service
public class UsuariosService {

    private final UsuariosRepository usuariosRepository;

    public UsuariosService(UsuariosRepository usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    public Optional<Usuario> lerUsuario(String num_pessoa){
        return usuariosRepository.getUsuariosByNumPessoa(num_pessoa);
    }

    public Optional<String> deletarUsuario(String num_matricula){
        return usuariosRepository.deleteUsuarioById(num_matricula);
    }
}
