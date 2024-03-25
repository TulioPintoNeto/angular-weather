import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { LocationDetailsService } from '../../data/services/locationDetails/location-details.service';
import { Subscription, interval, mergeMap } from 'rxjs';

const initialCity = {
  country: { code: 'GB', name: 'United Kingdom' },
  name: 'London',
  id: 1,
};

@Injectable({
  providedIn: 'root',
})
export class GlobalControllerService {
  loading: boolean = false;

  private _cities: City[] = [initialCity];
  private _locationDetailsList: LocationDetails[] = [];
  private _previousLocationDetailsList: LocationDetails[] = [];
  private subscription: Subscription | null = null;

  constructor(private locationDetailsService: LocationDetailsService) {
    this.update(initialCity);
  }

  add(city: City) {
    this._cities.push(city);
    this.update(city);
  }

  setAutoUpdated(status: boolean) {
    if (status) {
      this.subscription = interval(60 * 1000).subscribe(() => {
        this.updateAll();
      });
    } else if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateAll() {
    this._cities.forEach((city) => this.update(city));
  }

  update(city: City) {
    this.loading = true;
    this.locationDetailsService.get(city).subscribe({
      next: (locationDetails) => {
        const cityIndex = this._locationDetailsList.findIndex(
          ({ id }) => id === locationDetails.id
        );

        if (cityIndex === -1) {
          this._locationDetailsList.push(locationDetails);
        } else {
          this.updateInPosition(cityIndex, locationDetails);
        }
      },
      complete: () => this.loading = false,
    });
  }

  private updateInPosition(index: number, locationDetails: LocationDetails) {
    const old = this._locationDetailsList[index];
    const hasNotChanged =
      old.infoTimestamp.getTime() === locationDetails.infoTimestamp.getTime();

    if (hasNotChanged) {
      return;
    }

    this.updateOldList(old);
    this._locationDetailsList[index] = locationDetails;
  }

  private updateOldList(locationDetails: LocationDetails) {
    const previousListIndex = this._previousLocationDetailsList.findIndex(
      ({ id }) => id === locationDetails.id
    );

    if (previousListIndex === -1) {
      this._previousLocationDetailsList.push(locationDetails);
    } else {
      this._previousLocationDetailsList[previousListIndex] = locationDetails;
    }
  }

  get locationsDetails() {
    return this._locationDetailsList;
  }

  get previousLocationsDetails() {
    return this._previousLocationDetailsList;
  }
}
