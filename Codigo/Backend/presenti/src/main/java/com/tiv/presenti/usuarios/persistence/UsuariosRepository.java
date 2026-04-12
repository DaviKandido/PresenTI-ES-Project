package com.tiv.presenti.usuarios.persistence;

import com.tiv.presenti.usuarios.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, String> {

    Optional<Usuario> getUsuariosById(String id);
}
