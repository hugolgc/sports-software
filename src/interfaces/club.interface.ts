import type { Hall } from './hall.interface';
import type { Sport } from './sport.interface';

export interface Club {
  id: number;
  status: string;
  name: string;
  sport: Sport;
  halls: Hall[];
};