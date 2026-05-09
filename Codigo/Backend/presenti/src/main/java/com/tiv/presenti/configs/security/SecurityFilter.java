package com.tiv.presenti.configs.security;

import java.io.IOException;

import com.tiv.presenti.utils.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.tiv.presenti.usuarios.model.Usuario;
import com.tiv.presenti.usuarios.persistence.UsuariosRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {


  @Autowired
  private TokenService tokenService;

  @Autowired
  private UsuariosRepository usuariosRepository;
  
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException { 
    var token = this.recoverToken(request);
    if (token != null) {
      var login_NumPessoa = tokenService.isValidateToken(token);
      Usuario user = this.usuariosRepository.getUsuariosByNumPessoa(login_NumPessoa).orElse(null);


      if (user != null) {
        var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
      }
    }

    filterChain.doFilter(request, response);
  
  }

  private String recoverToken(HttpServletRequest request) {
    var authorizationHeader = request.getHeader("Authorization");
    if (authorizationHeader != null) {
      return authorizationHeader.replace("Bearer ", "");
    }
    return null;
  }
}
