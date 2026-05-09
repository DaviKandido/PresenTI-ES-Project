package com.tiv.presenti.turma_usuario.model; // PACOTE CORRIGIDO

import com.tiv.presenti.turmas.model.Turma;
import com.tiv.presenti.usuarios.model.Usuario;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "matriculado", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"id_usuario", "id_turma"})
})
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Matricula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "num_pessoa", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_turma", referencedColumnName = "num_registro", nullable = false)
    private Turma turma;

    @NotBlank
    @Column(nullable = false)
    private String papel; // Ex: "ALUNO" ou "PROFESSOR"
}