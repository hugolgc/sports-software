import { Directus } from '@directus/sdk';

const api = 'http://localhost:8055';
const directus = new Directus(api);

export const config = { api, directus };