import { readJson } from '../../core/readJson';

export const getCities = async (country: Country): Promise<City[]> => {
  const cities = await readJson<Omit<City, 'country'>[]>(
    `./cities/${country.code}.city.list.json`
  );

  return cities.map((city) => ({ ...city, country }));
};
