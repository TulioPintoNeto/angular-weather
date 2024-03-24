import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackedCitiesService {
  private key = 'tracked-cities-service';

  constructor() {}

  get(): City[] | null {
    const stored = localStorage.getItem(this.key);

    if (!stored) {
      return null;
    }

    return JSON.parse(stored) as City[];
  }

  save(cities: City[]): void {
    localStorage.setItem(this.key, JSON.stringify(cities));
  }
}
