package com.tiv.presenti.presenca.controller;

import com.tiv.presenti.presenca.DTO.PresencaDTO;
import com.tiv.presenti.presenca.model.Presenca;
import com.tiv.presenti.presenca.service.PresencaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/presenca")
public class PresencaController {

    private final PresencaService presencaService;

    public PresencaController(PresencaService presencaService) {
        this.presencaService = presencaService;
    }

    @GetMapping
    public ResponseEntity<List<PresencaDTO>> listarTodasPresencas() {
        List<PresencaDTO> presencas = presencaService.listarTodas()
                .stream()
                .map(PresencaDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(presencas);
    }

    //Lista todas as presenças de uma sessão
    @GetMapping("/sessao/{idSessao}")
    public ResponseEntity<List<PresencaDTO>> listarPresencasPorSessao(@PathVariable String idSessao) {
        List<PresencaDTO> presencas = presencaService.listarPorSessao(idSessao)
                .stream()
                .map(PresencaDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(presencas);
    }

    //Lista as presenças de uma sessão filtrando por presente/ausente
    @GetMapping("/sessao/{idSessao}/presente/{presente}")
    public ResponseEntity<List<PresencaDTO>> listarPresencasPorSessaoEPresente(
            @PathVariable String idSessao,
            @PathVariable boolean presente
    ) {
        List<PresencaDTO> presencas = presencaService.listarPorSessaoEPresente(idSessao, presente)
                .stream()
                .map(PresencaDTO::fromEntity)
                .collect(Collectors.toList());

        return ResponseEntity.ok(presencas);
    }
}