package com.tiv.presenti.usuarios.service;

import java.util.Optional;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.persistence.UsuariosRepository;

@Service
public class UsuariosService {

    private final UsuariosRepository usuariosRepository;

    public UsuariosService(UsuariosRepository usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    @Transactional
    public Usuario lerUsuario(String num_pessoa){
        return usuariosRepository.getUsuariosByNumPessoa(num_pessoa).orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));
    }

    @Transactional
    public void deletarUsuario(String numPessoa) {
        Usuario usuario = usuariosRepository.findUsuarioByNumPessoa(numPessoa)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário com número " + numPessoa + " não encontrado"));

        usuariosRepository.delete(usuario);
    }
}
