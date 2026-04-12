package com.tiv.presenti.presenca.service;

import com.tiv.presenti.presenca.model.Presenca;
import com.tiv.presenti.presenca.persistence.PresencaRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PresencaService {

    private final PresencaRepository presencaRepository;

    public PresencaService(PresencaRepository presencaRepository){
        this.presencaRepository = presencaRepository;
    }

    public Optional<Presenca> lerPresencaById(String num_matricula){
        return presencaRepository.getPresencaById(num_matricula);
    }

    //não so pegar as presencas que estão presente mas tambem filtrar por qual sessão que esta no momento da busca 
    public Optional<Presenca> lerPresencaByPresente(boolean presente){
        return presencaRepository.getPresencaByPresente(presente);
    }
}
