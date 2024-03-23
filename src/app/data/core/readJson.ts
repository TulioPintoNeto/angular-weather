import { promises } from 'fs';

export const readJson = async <T>(fileName: string): Promise<T> => {
  const file = await promises.readFile(fileName, 'utf-8');
  return JSON.parse(file);
};
