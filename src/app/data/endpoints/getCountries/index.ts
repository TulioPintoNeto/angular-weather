import { readJson } from '../../core/readJson';

export const getCountries = () => {
  return readJson<Country[]>('./countries.json');
};
