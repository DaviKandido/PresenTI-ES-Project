package com.tiv.presenti.presenca.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
        name = "presenca",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"id_usuario", "id_sessao"})
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Presenca {

    @Id
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    private String id;

    @NotBlank
    @Column(name = "id_usuario", nullable = false)
    private String idUsuario;

    @NotBlank
    @Column(name = "id_sessao", nullable = false)
    private String idSessao;

    @Column(name = "presente", nullable = false)
    private boolean presente;
}