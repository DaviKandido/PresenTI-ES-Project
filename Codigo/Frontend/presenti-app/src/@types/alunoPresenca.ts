export type PresencaAluno = {
  id: number;
  name: string;
  presences: number;
  percent: string;
  status: 'present' | 'absent';
};