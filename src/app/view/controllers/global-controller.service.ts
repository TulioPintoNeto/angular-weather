import { Injectable } from '@angular/core';
import { LocationDetailsService } from '../../data/services/locationDetails/location-details.service';

const initialCity = {
  country: { code: 'GB', name: 'United Kingdom' },
  name: 'London',
  id: 1,
};

@Injectable({
  providedIn: 'root',
})
export class GlobalControllerService {
  private _cities: City[] = [initialCity];
  private _locationDetailsList: LocationDetails[] = [];

  constructor(private locationDetailsService: LocationDetailsService) {
    this.update(initialCity);
  }

  add(city: City) {
    this._cities.push(city);
    this.update(city);
  }

  update(city: City) {
    this.locationDetailsService.get(city).subscribe({
      next: (locationDetails) => {
        this._locationDetailsList.push(locationDetails);
        console.log(this._locationDetailsList);
      },
    });

  }

  get locationsDetails() {
    return this._locationDetailsList;
  }
}
