import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent {
  @Input({ required: true })
  locationDetails: LocationDetails | null = null;

  formatDateTime(date: Date | undefined) {
    return this.formatDate(date, {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  }

  formatHourMin(date: Date | undefined) {
    return this.formatDate(date, {
      timeStyle: 'short',
    });
  }

  formatDate(date: Date | undefined, options: Intl.DateTimeFormatOptions) {
    if (!date) {
      return '-';
    }

    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
}
