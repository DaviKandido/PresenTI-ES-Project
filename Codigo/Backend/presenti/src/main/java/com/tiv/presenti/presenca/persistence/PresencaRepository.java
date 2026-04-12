package com.tiv.presenti.presenca.persistence;

import com.tiv.presenti.presenca.model.Presenca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PresencaRepository extends JpaRepository<Presenca, String> {

    Optional<Presenca> getPresencaById(String id);
    
    //não so pegar as presencas que estão presente mas tambem filtrar por qual sessão que esta no momento da busca 
    Optional<Presenca> getPresencaByPresente(boolean presente); 
}
