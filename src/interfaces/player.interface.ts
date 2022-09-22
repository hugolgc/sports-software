import type { Club } from './club.interface';

export interface Player {
  id: number;
  status: string;
  bornDate: string;
  clubs: Club[];
  gender: 'man' | 'woman';
}