import { Component, Input, numberAttribute } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

type Trend = 'increased' | 'same' | 'decreased';

@Component({
  selector: 'app-weather-metrics-trend',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './weather-metrics-trend.component.html',
  styleUrl: './weather-metrics-trend.component.scss',
})
export class WeatherMetricsTrendComponent {
  @Input({ required: true })
  label!: string;

  @Input({ required: true })
  unit!: string;

  @Input({ required: true, transform: numberAttribute })
  value: number | undefined;

  @Input({ transform: numberAttribute })
  oldValue: number | undefined;

  get trend(): Trend {
    if (!this.oldValue || !this.value) {
      return 'same';
    }

    if (this.value === this.oldValue) {
      return 'same';
    }
    if (this.value > this.oldValue) {
      return 'increased';
    }
    return 'decreased';
  }
}
