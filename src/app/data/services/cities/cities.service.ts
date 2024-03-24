import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { readJson } from '../../core/readJson';

@Injectable({
  providedIn: 'root',
})
export class GetCitiesService {
  constructor() {}

  get(country: Country): Observable<Omit<City, 'country'>[]> {
    const promise = readJson<Omit<City, 'country'>[]>(this.buildPath(country));
    return from(promise);
  }

  private buildPath(country: Country) {
    return `./cities/${country.code}.city.list.json`;
  }
}
