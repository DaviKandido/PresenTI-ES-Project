package com.tiv.presenti.cursos.service;

import java.util.List;
import java.util.Optional;

import com.tiv.presenti.cursos.models.Curso;
import com.tiv.presenti.cursos.repository.CursosRepository;
import org.springframework.stereotype.Service;

@Service
public class CursosService {

    private final CursosRepository repository;

    public CursosService(CursosRepository repository) {
        this.repository = repository;
    }

    public Curso salvar(Curso curso) {
        return repository.save(curso);
    }

    public List<Curso> listar() {
        return repository.findAll();
    }

    public Optional<Curso> buscarPorId(String numRegistro) {
        return repository.getCursoByNumRegistro(numRegistro);
    }

    public void deletar(String numRegistro) {
        repository.deleteById(numRegistro);
    }
}

