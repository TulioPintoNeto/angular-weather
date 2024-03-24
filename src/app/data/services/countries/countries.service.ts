import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { readJson } from '../../core/readJson';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor() {}

  get(): Observable<Country[]> {
    const promise = readJson<Country[]>('./countries.json');
    return from(promise);
  }
}
