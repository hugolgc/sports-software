import { config } from '../configs';

export const useServer = (name: string) => config.directus.items(name);