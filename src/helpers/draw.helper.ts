import { groupBy, sortBy, type Dictionary } from 'lodash';
import type { Draw } from '../interfaces/draw.interface';

export const drawHelper = {
  groupByDisciplineSortByLevel(draws: Draw[]): Dictionary<Draw[]> {
    const drawsSortByLevel = sortBy(draws, ({ levels }) =>
      sortBy(levels, ({ levels_id }) => levels_id.id)
    );
    return groupBy(drawsSortByLevel, ({ discipline }) => discipline.id); 
  }
};