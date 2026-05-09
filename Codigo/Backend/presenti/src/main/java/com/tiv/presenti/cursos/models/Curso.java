

package com.tiv.presenti.cursos.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "curso")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Curso {
    @Id
    @Column(name = "num_registro", nullable = false, unique = true)
    private String numRegistro;

    @NotBlank
    @Column(nullable = false)
    private String nome;

    @NotBlank
    @Column(nullable = false)
    private String turno;

    @NotBlank
    @Column(nullable = false)
    private String campus;
}