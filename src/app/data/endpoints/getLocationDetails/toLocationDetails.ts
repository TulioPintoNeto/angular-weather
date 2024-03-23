const parseTime = (time: number): Date => {
  return new Date(time * 1000);
};

export const toLocationDetails = (
  city: City,
  data: LocationDetailsModel
): LocationDetails => {
  return {
    ...city,
    coordinates: {
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    },
    infoTimestamp: parseTime(data.dt),
    sunnyTime: {
      sunrise: parseTime(data.sys.sunrise),
      sunset: parseTime(data.sys.sunset),
    },
    timezone: data.timezone,
    weather: {
      skyStatus: data.weather[0].description,
      clouds: data.clouds.all,
    },
    weatherConditions: {
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temperature: data.main.temp,
      temperatureMax: data.main.temp_max,
      temperatureMin: data.main.temp_min,
      visibility: data.visibility,
      wind: data.wind.speed,
      windDirection: data.wind.deg,
    },
  };
};
