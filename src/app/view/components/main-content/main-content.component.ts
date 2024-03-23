import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, WeatherDetailsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
