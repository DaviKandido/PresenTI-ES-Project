package com.tiv.presenti.turma_usuario.persistence;

import com.tiv.presenti.turma_usuario.model.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MatriculaRepository extends JpaRepository<Matricula, Long>{
    Optional<Matricula> findByUsuario_NumPessoaAndTurma_Id(String numPessoa, String idTurma);

    boolean existsByUsuario_NumPessoaAndTurma_IdAndPapel(String numPessoa, String idTurma, String papel);

    List<Matricula> findAllByTurma_Id(String idTurma);
}
