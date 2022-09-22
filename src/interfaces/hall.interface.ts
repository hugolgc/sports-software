import type { Club } from './club.interface';
import type { Draw } from './draw.interface';

export interface Hall {
  id: number;
  club: Club;
  name: string;
  address: string;
  fields: number;
  draws: Draw[];
};