package com.tiv.presenti.usuarios.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tiv.presenti.usuarios.model.Usuario;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, String> {

    Optional<Usuario> getUsuariosByNumPessoa(String num_pessoa);
    Optional<Usuario> getUsuariosById(String id);
    Optional<String> deleteUsuarioById(String id);
}
