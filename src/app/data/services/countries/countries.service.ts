import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  path: string = '/assets/countries.json';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.path);
  }
}
