import type { Discipline } from './discipline.interface';
import type { Hall } from './hall.interface';
import type { Level } from './level.interface';
import type { Tournament } from './tournament.interface';

export interface Draw {
  id: number;
  status: string;
  tournament: Tournament[];
  discipline: Discipline;
  levels: [{ levels_id: Level }];
  hall: Hall[];
};