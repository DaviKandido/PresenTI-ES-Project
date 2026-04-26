import { Horario } from './horario';

export type Turma = {
  id: string; // num_registro
  horarios: Horario[];
  nome: string;
  campus: string;
  predio: string;
  sala: string;
};
