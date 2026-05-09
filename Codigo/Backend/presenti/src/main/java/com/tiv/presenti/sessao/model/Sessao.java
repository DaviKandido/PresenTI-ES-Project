package com.tiv.presenti.sessao.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "sessao")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Sessao {

    @Id
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    private String id;

    @NotBlank
    @Column(name = "id_turma", nullable = false)
    private String idTurma;

    @Column(name = "token", nullable = false, unique = true)
    private String token;

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;

    @NotBlank
    @Column(name = "status", nullable = false)
    private String status;
}