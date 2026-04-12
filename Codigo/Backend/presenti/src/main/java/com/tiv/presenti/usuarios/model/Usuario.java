package com.tiv.presenti.usuarios.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Usuario {

    @NotBlank
    @Id
    @Column(name = "num_matricula")
    private String id;

    @NotBlank
    @Column(unique = true)
    private String num_pessoa;

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
    Tipo tipo;

    public Usuario(String id, String num_pessoa, String nome, String email, String senha, Tipo tipo){
        this.id = id;
        this.num_pessoa = num_pessoa;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
    }

    enum Tipo{
        ADMIN, USUARIO
    }
}

