import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationDetailsService {
  constructor(private httpClient: HttpClient) {}

  get(city: City) {
    this.httpClient.get(this.buildPath(city)).subscribe();
  
    // const data: LocationDetailsModel = ;
  
    // return this.toLocationDetails(city, data);

  }

  private buildPath({ name, country: { code } }: City) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${name},${code}&appid=`;
  }

  private toLocationDetails(city: City, data: LocationDetailsModel): LocationDetails {
    return {
      ...city,
      coordinates: {
        longitude: data.coord.lon,
        latitude: data.coord.lat,
      },
      infoTimestamp: this.parseTime(data.dt),
      sunnyTime: {
        sunrise: this.parseTime(data.sys.sunrise),
        sunset: this.parseTime(data.sys.sunset),
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
  }

  private parseTime(time: number): Date {
    return new Date(time * 1000);
  };
}
