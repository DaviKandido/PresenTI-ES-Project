package com.tiv.presenti.usuarios.controller;

import com.tiv.presenti.exceptions.exceptionType.ResourceNotFoundException;
import com.tiv.presenti.usuarios.DTO.UsuarioResponseDTO;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.service.UsuariosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/usuarios")
public class UsuariosController {

    private final UsuariosService usuariosService;

    public UsuariosController(UsuariosService usuariosService){
        this.usuariosService = usuariosService;
    }

    @GetMapping("/{num_matricula}")
    public ResponseEntity<UsuarioResponseDTO> lerUsuario(@PathVariable String num_matricula){
        Usuario usuario = usuariosService.lerUsuario(num_matricula).orElseThrow(() -> new ResourceNotFoundException("Usuario com matrícula " + num_matricula + "não existe"));
        return ResponseEntity.ok(UsuarioResponseDTO.fromEntity(usuario));
    }
}
