import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent {

}
