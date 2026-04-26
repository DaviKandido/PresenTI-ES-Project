package com.tiv.presenti.turmas.controller;

import com.tiv.presenti.turmas.model.Turma;
import com.tiv.presenti.turmas.service.TurmasService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/turmas")
public class TurmasController {

    private final TurmasService turmasService;

    public TurmasController(TurmasService turmasService) {
        this.turmasService = turmasService;
    }

    // Post
    @PostMapping
    public ResponseEntity<Turma> criarTurma(@RequestBody Turma turma) {
        Turma turmaSalva = turmasService.salvarTurma(turma);
        return ResponseEntity.status(HttpStatus.CREATED).body(turmaSalva);
    }

    // Get all
    @GetMapping
    public ResponseEntity<List<Turma>> listarTodasTurmas() {
        List<Turma> lista = turmasService.lerTodasTurmas();
        return ResponseEntity.ok(lista);
    }

    // Get
    @GetMapping("/{id}")
    public ResponseEntity<Turma> buscarTurmaPorId(@PathVariable String id) {
        Optional<Turma> turma = turmasService.lerTurma(id);

        if (turma.isPresent()) {
            return ResponseEntity.ok(turma.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTurma(@PathVariable String id) {
        turmasService.deletarTurma(id);
        return ResponseEntity.noContent().build();
    }
}