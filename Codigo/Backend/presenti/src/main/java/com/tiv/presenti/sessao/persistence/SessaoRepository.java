package com.tiv.presenti.sessao.persistence;

import com.tiv.presenti.sessao.model.Sessao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SessaoRepository extends JpaRepository<Sessao, String> {

    List<Sessao> findAllByIdTurmaOrderByTimestampDesc(String idTurma);

    List<Sessao> findAllByStatusOrderByTimestampDesc(String status);

    Optional<Sessao> findByToken(String token);

    Optional<Sessao> findFirstByIdTurmaAndStatusOrderByTimestampDesc(String idTurma, String status);

    boolean existsByToken(String token);
}