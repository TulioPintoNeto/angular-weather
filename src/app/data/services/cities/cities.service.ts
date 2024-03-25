import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private httpClient: HttpClient) {}

  get(country: Country): Observable<City[]> {
    return this.httpClient
      .get<CityModel[]>(this.buildPath(country))
      .pipe(map(this.toCities(country)));
      // .pipe(delay(10000), map(this.toCities(country)));
  }

  private buildPath(country: Country) {
    return `/assets/cities/${country.code}.city.list.json`;
  }

  private toCities(country: Country) {
    return (cities: CityModel[]): City[] =>
      cities.map((city) => ({
        ...city,
        country,
      }));
  }
}
