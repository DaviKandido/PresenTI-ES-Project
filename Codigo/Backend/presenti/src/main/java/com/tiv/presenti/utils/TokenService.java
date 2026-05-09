package com.tiv.presenti.utils;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.tiv.presenti.usuarios.model.Usuario;

@Service
public class TokenService {


  @Value("${api.security.token.secret}")
  private String SECRET_KEY;
  
  public String generateToken(Usuario user) {
    try {
        Algorithm akAlgorithm = Algorithm.HMAC256(SECRET_KEY);
        String token = JWT.create()
            .withIssuer("auth-api")
            .withSubject(user.getNumPessoa())
            .withExpiresAt(genExpirationDate()) // 24 hours
            .sign(akAlgorithm);

        return token;
    } catch (JWTCreationException exception) {
      throw new RuntimeException("Erro ao gerar token", exception);
    }
  }

  public String isValidateToken(String token) {
    try {
      Algorithm akAlgorithm = Algorithm.HMAC256(SECRET_KEY);

      return JWT.require(akAlgorithm).withIssuer("auth-api").build().verify(token).getSubject();

      
    } catch (JWTVerificationException exception) {
      throw new RuntimeException("Token inválido", exception);
    }
  }

  private Instant genExpirationDate(){
    return LocalDateTime.now().plusHours(24).toInstant(ZoneOffset.of("-03:00")); // 24 hours from now in time zone Brazil
  }
}
