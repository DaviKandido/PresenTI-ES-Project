package com.tiv.presenti.usuarios.model;

import java.util.Collection;
import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.tiv.presenti.utils.TiposUser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(of = "num_pessoa")
public class Usuario implements UserDetails {

    @NotBlank
    @Id
    @Column(name = "num_pessoa")
    private String numPessoa;

    @NotBlank
    @Column(unique = true, name = "num_matricula")
    private String numMatricula;

    @NotBlank
    @Column
    private String nome;

    @NotBlank
    @Email(message = "Email invalido")
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank
    @Size(min = 8, message = "Senha não atingiu o mínimo de 8 caracteres")
    @Column(nullable = false)
    private String senha;

    @Column
    private String image_url;

    @Column(nullable = false)
    TiposUser tipo;

    public Usuario(String numPessoa, String numMatricula, String nome, String email, String senha, TiposUser tipo){
        this.numPessoa = numPessoa;
        this.numMatricula = numMatricula;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
    }


    // Spring consulta para encontrar as Roles (tipos/permissões) do usuario
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.tipo == tipo.ADMIN) {
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), 
                           new SimpleGrantedAuthority("ROLE_PROFESSOR"),
                           new SimpleGrantedAuthority("ROLE_ALUNO"));
        } else if(this.tipo == tipo.PROFESSOR) {
            return List.of(new SimpleGrantedAuthority("ROLE_PROFESSOR"),
                           new SimpleGrantedAuthority("ROLE_ALUNO"));
        }
        else return List.of(new SimpleGrantedAuthority("ROLE_ALUNO"));
    }

    @Override
    public @Nullable String getPassword() {
        return this.senha;
    }

    @Override
    public String getUsername() {
        return this.numPessoa;
    }
}
