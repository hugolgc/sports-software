import type { Draw } from './draw.interface';
import type { Sport } from './sport.interface';

export interface Level {
  id: number;
  name: string;
  sign: string;
  sport: Sport[];
  draws: [{ draws_id: Draw }];
};