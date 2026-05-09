package com.tiv.presenti.turma_usuario.controller;

import com.tiv.presenti.turma_usuario.DTO.MatriculaCreationRequest;
import com.tiv.presenti.turma_usuario.DTO.MatriculaResponse;
import com.tiv.presenti.turma_usuario.model.Matricula;
import com.tiv.presenti.turma_usuario.service.MatriculaService;
import com.tiv.presenti.turmas.model.Turma;
import com.tiv.presenti.turmas.service.TurmasService;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.service.UsuariosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matriculas")
public class MatriculaController {
    private final MatriculaService service;
    private final UsuariosService usuariosService;
    private final TurmasService turmasService;

    public MatriculaController(MatriculaService service, UsuariosService usuariosService, TurmasService turmasService) {
        this.service = service;
        this.usuariosService = usuariosService;
        this.turmasService = turmasService;
    }

    @PostMapping
    public ResponseEntity<MatriculaResponse> criar(@RequestBody MatriculaCreationRequest req) {
        Usuario usuario = usuariosService.lerUsuario(req.idUsuario());
        Turma turma = turmasService.lerTurma(req.idTurma());
        Matricula m = new Matricula(null, usuario, turma, req.papel());
        MatriculaResponse res = MatriculaResponse.fromEntity(service.matricular(m));
        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }

    @GetMapping
    public ResponseEntity<List<Matricula>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @GetMapping("/turma/{idTurma}")
    public ResponseEntity<List<Matricula>> listarPorTurma(@PathVariable String idTurma) {
        return ResponseEntity.ok(service.listarPorTurma(idTurma));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.removerMatricula(id);
        return ResponseEntity.noContent().build();
    }
}