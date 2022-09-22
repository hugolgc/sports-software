export const drawFactory = {
  getAll: (tournamentId: number) => ({
    filter: { tournament: tournamentId },
    fields: 'id,discipline.id,discipline.name,discipline.sign,levels.levels_id.sign'
  }),
  getOne: () => ({
    fields: 'id,discipline.id,discipline.name,levels.levels_id.sign'
  })
};