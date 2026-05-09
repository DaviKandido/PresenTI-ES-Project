package com.tiv.presenti.turma_usuario.service;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.turma_usuario.model.Matricula;
import com.tiv.presenti.turma_usuario.persistence.MatriculaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatriculaService {
    private final MatriculaRepository repository;

    public MatriculaService(MatriculaRepository repository) {
        this.repository = repository;
    }

    public Matricula matricular(Matricula matricula) {
        return repository.save(matricula);
    }

    public List<Matricula> listarTodas() {
        return repository.findAll();
    }

    public List<Matricula> listarPorTurma(String idTurma) {
        return repository.findAllByTurma_Id(idTurma);
    }

    public Matricula buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Matrícula não encontrada"));
    }

    public void removerMatricula(Long id) {
        if (!repository.existsById(id)) throw new ResourceNotFoundException("Matrícula inexistente");
        repository.deleteById(id);
    }
}