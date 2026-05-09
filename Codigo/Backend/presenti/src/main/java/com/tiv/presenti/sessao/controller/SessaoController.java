package com.tiv.presenti.sessao.controller;

import com.tiv.presenti.sessao.DTO.SessaoDTO;
import com.tiv.presenti.sessao.model.Sessao;
import com.tiv.presenti.sessao.service.SessaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/sessao")
public class SessaoController {

    private final SessaoService sessaoService;

    public SessaoController(SessaoService sessaoService) {
        this.sessaoService = sessaoService;
    }

    @GetMapping
    public ResponseEntity<List<SessaoDTO>> listarTodasSessoes() {
        List<SessaoDTO> sessoes = sessaoService.listarTodas()
                .stream()
                .map(SessaoDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(sessoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SessaoDTO> buscarSessaoPorId(@PathVariable String id) {
        Sessao sessao = sessaoService.buscarPorId(id);
        return ResponseEntity.ok(SessaoDTO.fromEntity(sessao));
    }

    @GetMapping("/turma/{idTurma}")
    public ResponseEntity<List<SessaoDTO>> listarSessoesPorTurma(@PathVariable String idTurma) {
        List<SessaoDTO> sessoes = sessaoService.listarPorTurma(idTurma)
                .stream()
                .map(SessaoDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(sessoes);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<SessaoDTO>> listarSessoesPorStatus(@PathVariable String status) {
        List<SessaoDTO> sessoes = sessaoService.listarPorStatus(status)
                .stream()
                .map(SessaoDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(sessoes);
    }

    @GetMapping("/token/{token}")
    public ResponseEntity<SessaoDTO> buscarPorToken(@PathVariable String token) {
        Sessao sessao = sessaoService.buscarPorToken(token);
        return ResponseEntity.ok(SessaoDTO.fromEntity(sessao));
    }

    @GetMapping("/turma/{idTurma}/atual")
    public ResponseEntity<SessaoDTO> buscarSessaoAtualDaTurma(@PathVariable String idTurma) {
        Sessao sessao = sessaoService.buscarSessaoAtualDaTurma(idTurma);
        return ResponseEntity.ok(SessaoDTO.fromEntity(sessao));
    }
}