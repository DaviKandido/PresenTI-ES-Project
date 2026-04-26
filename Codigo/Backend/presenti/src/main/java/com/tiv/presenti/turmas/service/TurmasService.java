package com.tiv.presenti.turmas.service;

import com.tiv.presenti.turmas.model.Turma;
import com.tiv.presenti.turmas.persistence.TurmasRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurmasService {

    private final TurmasRepository turmasRepository;

    public TurmasService(TurmasRepository turmasRepository) {
        this.turmasRepository = turmasRepository;
    }

    // Create e Update
    public Turma salvarTurma(Turma turma) {
        return turmasRepository.save(turma);
    }

    // Read
    public Optional<Turma> lerTurma(String num_registro) {
        return turmasRepository.getTurmaById(num_registro);
    }

    // Read all
    public List<Turma> lerTodasTurmas() {
        return turmasRepository.findAll();
    }

    // Delete
    public void deletarTurma(String num_registro) {
        turmasRepository.deleteById(num_registro);
    }
}