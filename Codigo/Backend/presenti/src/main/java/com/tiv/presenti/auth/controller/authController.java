package com.tiv.presenti.auth.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiv.presenti.auth.DTO.AuthenticationDTO;
import com.tiv.presenti.auth.DTO.LoginResponsaDTO;
import com.tiv.presenti.auth.DTO.RegisterDTO;
import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.persistence.UsuariosRepository;
import com.tiv.presenti.utils.tokenService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class authController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UsuariosRepository usuariosRepository;

  @Autowired
  private tokenService tokenService;

  @PostMapping("/login")
  public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
      
    var userNamePassword = new UsernamePasswordAuthenticationToken(data.numPessoa(), data.senha()); 
    var auth = this.authenticationManager.authenticate(userNamePassword);

    var token = tokenService.generateToken((Usuario) auth.getPrincipal());

    return ResponseEntity.ok(new LoginResponsaDTO(token));
  }

  @PostMapping("/signup")
  public ResponseEntity signUp(@RequestBody @Valid RegisterDTO data) {

      Optional<Usuario> userSherch = this.usuariosRepository.getUsuariosByNumPessoa(data.numPessoa());

      if(userSherch.isPresent()) {
          return ResponseEntity.badRequest().body("Usuario já cadastrado");
      }
      
      String encryptedPassword = new BCryptPasswordEncoder().encode(data.senha());
      

      Usuario newUsuario = new Usuario(data.numPessoa(),
                                       data.numMatricula(),
                                       data.nome(),
                                       data.email(),
                                       encryptedPassword,
                                       data.tipo());
      
      Usuario entity = this.usuariosRepository.save(newUsuario);
      
      return ResponseEntity.ok(entity);
  }
  
  
  
}
