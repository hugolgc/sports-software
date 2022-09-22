export const hallFactory = {
  getAll: (clubId: number) => ({
    filter: { club: clubId },
    fields: 'id,name,address'
  })
};