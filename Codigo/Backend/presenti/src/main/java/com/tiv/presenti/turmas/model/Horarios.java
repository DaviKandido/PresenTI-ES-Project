package com.tiv.presenti.turmas.model;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalTime;

@Embeddable
@Getter
@Setter
@NoArgsConstructor

public class Horarios {

    private String diaDaSemana;
    private LocalTime horarioInicial;
    private LocalTime horarioFinal;

}