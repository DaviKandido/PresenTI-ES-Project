package com.tiv.presenti.usuarios.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.usuarios.DTO.UsuarioResponseDTO;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.service.UsuariosService;


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
        Usuario usuario = usuariosService.lerUsuario(num_pessoa);
        return ResponseEntity.ok(UsuarioResponseDTO.fromEntity(usuario));
    }

    @DeleteMapping("/{num_pessoa}")
    public ResponseEntity<UsuarioResponseDTO> deletarUsuario(@PathVariable String num_pessoa){
        usuariosService.deletarUsuario(num_pessoa);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
