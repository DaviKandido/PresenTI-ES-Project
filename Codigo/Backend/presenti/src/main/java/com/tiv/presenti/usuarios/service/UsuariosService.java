package com.tiv.presenti.usuarios.service;

import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.persistence.UsuariosRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuariosService {

    private final UsuariosRepository usuariosRepository;

    public UsuariosService(UsuariosRepository usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    public Optional<Usuario> lerUsuario(String num_matricula){
        return usuariosRepository.getUsuariosById(num_matricula);
    }
}
