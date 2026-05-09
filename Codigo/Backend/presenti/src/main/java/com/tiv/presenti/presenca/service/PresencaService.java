package com.tiv.presenti.presenca.service;

import com.tiv.presenti.presenca.model.Presenca;
import com.tiv.presenti.presenca.persistence.PresencaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PresencaService {

    private final PresencaRepository presencaRepository;

    public PresencaService(PresencaRepository presencaRepository) {
        this.presencaRepository = presencaRepository;
    }

    public List<Presenca> listarTodas() {
        return presencaRepository.findAll();
    }

    public List<Presenca> listarPorSessao(String idSessao) {
        return presencaRepository.findAllByIdSessao(idSessao);
    }

    public List<Presenca> listarPorSessaoEPresente(String idSessao, boolean presente) {
        return presencaRepository.findAllByIdSessaoAndPresente(idSessao, presente);
    }
}