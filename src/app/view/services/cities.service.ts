import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  cities: City[] = [
    { country: { code: 'GB', name: 'United Kingdom' }, name: 'London', id: 1 },
    { country: { code: 'DE', name: 'Germany' }, name: 'Munich', id: 2 },
    { country: { code: 'BR', name: 'Brazil' }, name: 'São Paulo', id: 3 },
  ];

  constructor() {}
}
