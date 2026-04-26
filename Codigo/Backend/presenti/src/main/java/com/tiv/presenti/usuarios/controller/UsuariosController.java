package com.tiv.presenti.usuarios.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.usuarios.DTO.UsuarioResponseDTO;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.service.UsuariosService;
import org.springframework.web.bind.annotation.RequestParam;



import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/usuarios")
public class UsuariosController {

    private final UsuariosService usuariosService;

    public UsuariosController(UsuariosService usuariosService){
        this.usuariosService = usuariosService;
    }
    
    @GetMapping("/{num_pessoa}")
    public ResponseEntity<UsuarioResponseDTO> lerUsuario(@PathVariable String num_pessoa){
        Usuario usuario = usuariosService.lerUsuario(num_pessoa).orElseThrow(() -> new ResourceNotFoundException("Usuario com numero de pessoa " + num_pessoa + " não existe"));
        return ResponseEntity.ok(UsuarioResponseDTO.fromEntity(usuario));
    }

    @DeleteMapping("/{num_matricula}")
    public ResponseEntity<UsuarioResponseDTO> deletarUsuario(@PathVariable String num_matricula){
        String id = usuariosService.deletarUsuario(num_matricula).orElseThrow(() -> new ResourceNotFoundException("Usuário solicitado não encontrado"));
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
