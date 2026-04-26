// src/types/usuario.ts

export enum TipoUsuario {
  ADMIN = 'ADMIN',
  USUARIO = 'USUARIO',
  PROFESSOR = 'PROFESSOR',
}

export type Usuario = {
  num_matricula: string; 
  numPessoa: string; 
  nome: string;
  email: string;
  senha: string;
  imageUrl?: string; 
  tipo: TipoUsuario;
};
