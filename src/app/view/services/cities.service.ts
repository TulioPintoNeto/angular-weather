import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  cities: City[] = [
    { country: 'GB', name: 'London', id: 1 },
    { country: 'DE', name: 'Munich', id: 2 },
    { country: 'BR', name: 'São Paulo', id: 3 },
  ];

  constructor() {}
}
