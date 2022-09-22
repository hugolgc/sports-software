import type { Club } from './club.interface';
import type { Discipline } from './discipline.interface';
import type { Level } from './level.interface';

export interface Sport {
  id: number;
  name: string;
  clubs: Club[];
  disciplines: Discipline[];
  levels: Level[];
};