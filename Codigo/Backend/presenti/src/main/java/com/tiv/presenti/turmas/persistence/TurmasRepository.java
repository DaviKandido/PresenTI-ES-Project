package com.tiv.presenti.turmas.persistence;

import com.tiv.presenti.turmas.model.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TurmasRepository extends JpaRepository<Turma, String> {
    Optional<Turma> getTurmaById(String id);

}