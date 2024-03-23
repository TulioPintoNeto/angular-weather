type LocationDetails = City & {
  coordinates: Coordinates;
  infoTimestamp: Date;
  sunnyTime: SunnyTime;
  timezone: number;
  weather: Weather;
  weatherConditions: WeatherConditions;
}