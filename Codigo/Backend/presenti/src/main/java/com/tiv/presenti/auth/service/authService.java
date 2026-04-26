package com.tiv.presenti.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tiv.presenti.auth.persistence.authRepository;

@Service
public class authService implements UserDetailsService {

  @Autowired
  private authRepository authRepository;

  @Override
  public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
    return authRepository.getUsuariosByNumPessoa(id).orElseThrow(() -> new UsernameNotFoundException("User not found"));
  }
  
}
