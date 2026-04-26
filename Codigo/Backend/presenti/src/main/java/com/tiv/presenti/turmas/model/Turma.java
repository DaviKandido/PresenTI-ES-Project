package com.tiv.presenti.turmas.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Turma {

    @NotBlank
    @Id
    @Column(name = "num_registro")
    private String id;

    @NotBlank
    @ElementCollection
    private List<Horarios> horarios;

    @NotBlank
    @Column
    private String nome;

    @NotBlank
    @Column
    private String campus;

    @NotBlank
    @Column
    private String predio;

    @NotBlank
    @Column
    private String sala;

}
