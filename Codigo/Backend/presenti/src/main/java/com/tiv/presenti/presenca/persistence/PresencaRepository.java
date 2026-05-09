package com.tiv.presenti.presenca.persistence;

import com.tiv.presenti.presenca.model.Presenca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PresencaRepository extends JpaRepository<Presenca, String> {

    List<Presenca> findAllByIdSessao(String idSessao);

    List<Presenca> findAllByIdSessaoAndPresente(String idSessao, boolean presente);

    Optional<Presenca> findByIdUsuarioAndIdSessao(String idUsuario, String idSessao);

    boolean existsByIdUsuarioAndIdSessao(String idUsuario, String idSessao);
}