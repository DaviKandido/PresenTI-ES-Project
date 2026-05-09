package com.tiv.presenti.cursos.controller;


import com.tiv.presenti.cursos.models.Curso;
import com.tiv.presenti.cursos.service.CursosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursosController {
    private final CursosService cursosService;

    public CursosController(CursosService cursosService) {
        this.cursosService = cursosService;
    }

    @PostMapping
    public ResponseEntity<Curso> criarCurso(@RequestBody Curso curso) {
        return ResponseEntity.status(HttpStatus.CREATED).body(cursosService.salvar(curso));
    }

    @GetMapping
    public ResponseEntity<List<Curso>> listarCursos() {
        return ResponseEntity.ok(cursosService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> buscarCurso(@PathVariable String id) {
        return cursosService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}