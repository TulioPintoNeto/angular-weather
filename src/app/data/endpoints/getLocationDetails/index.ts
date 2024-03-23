import { toLocationDetails } from './toLocationDetails';

const buildPath = ({ name, country: { code } }: City) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${name},${code}&appid=`;

const getLocationDetails = async (city: City) => {
  const response = await fetch(buildPath(city));

  const data: LocationDetailsModel = await response.json();

  return toLocationDetails(city, data);
};
