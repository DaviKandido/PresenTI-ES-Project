package com.tiv.presenti.cursos.repository;


import com.tiv.presenti.cursos.models.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CursosRepository extends JpaRepository<Curso, String> {
    Optional<Curso> getCursoByNumRegistro(String numRegistro);
}