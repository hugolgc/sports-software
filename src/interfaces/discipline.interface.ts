import type { Draw } from './draw.interface';
import type { Sport } from './sport.interface';

export interface Discipline {
  id: number;
  name: string;
  sign: string;
  sport: Sport[];
  draws: Draw[];
};