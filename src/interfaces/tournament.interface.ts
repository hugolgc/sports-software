import type { Club } from './club.interface';
import type { Draw } from './draw.interface';

export interface Tournament {
  id: number;
  status: string;
  club: Club;
  name: string;
  startDate: string;
  draws: Draw[];
};