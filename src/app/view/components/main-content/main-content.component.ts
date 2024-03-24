import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherMetricsTrendComponent } from './weather-metrics-trend/weather-metrics-trend.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    WeatherDetailsComponent,
    WeatherMetricsTrendComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  @Input({ required: true })
  locationDetails: LocationDetails | null = null;
}
