package com.tiv.presenti.presenca.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Presenca {

    @NotBlank
    @Id
    @Column(nullable = false, name = "id", unique = true)
    private String id;

    @NotBlank
    @Column(nullable = false, name = "id_usuario")
    private String id_usuario;

    @NotBlank
    private boolean presente;


    public Presenca(String id, String id_usuario, boolean presente){
        this.id = id;
        this.id_usuario = id_usuario;
        this.presente = presente;
    }

    enum Tipo{
        ADMIN, USUARIO
    }
}

