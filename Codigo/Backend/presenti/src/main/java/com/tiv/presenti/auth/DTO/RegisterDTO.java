package com.tiv.presenti.auth.DTO;

import com.tiv.presenti.utils.TiposUser;

public record RegisterDTO(String numPessoa, String senha, TiposUser tipo,String numMatricula, String email, String nome) {
  
}
