import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  path: string = '/assets/countries.json';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.path)
    // .pipe(delay(10000));
  }
}
