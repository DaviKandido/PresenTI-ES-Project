package com.tiv.presenti.presenca.controller;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.presenca.DTO.PresencaDTO;
import com.tiv.presenti.presenca.model.Presenca;
import com.tiv.presenti.presenca.service.PresencaService;
import com.tiv.presenti.usuarios.DTO.UsuarioResponseDTO;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.service.UsuariosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/presenca")
public class PresencaController {


    private final PresencaService presencaService;

    public PresencaController(PresencaService presencaService){
        this.presencaService = presencaService;
    }


    @GetMapping("/{id}")
    public ResponseEntity<PresencaDTO> lerPresenca(@PathVariable String id){      
        Presenca presenca = presencaService.lerPresencaById(id).orElseThrow(() -> new ResourceNotFoundException("Presença com ID " + id + " não existe"));
        return ResponseEntity.ok(PresencaDTO.fromEntity(presenca));
    }

    //não so pegar as presencas que estão presente mas tambem filtrar por qual sessão que esta no momento da busca 
    @GetMapping("/presente/{presente}")
    public ResponseEntity<PresencaDTO> lerPresencaPorPresente(@PathVariable boolean presente){
        Presenca presenca = presencaService.lerPresencaByPresente(presente).orElseThrow(() -> new ResourceNotFoundException("Presença com presente " + presente + " não existe"));
        return ResponseEntity.ok(PresencaDTO.fromEntity(presenca));
    }
}
