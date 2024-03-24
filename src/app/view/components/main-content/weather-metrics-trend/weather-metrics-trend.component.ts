import { Component, Input, numberAttribute } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

type ValueState = {
  old?: number;
  new?: number;
}

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
  

  trend: 'increased' | 'same' | 'decreased' = 'same';
  
  private valueState: ValueState = {};

  updateValueState() {
    this.valueState.old = this.valueState.new;
    this.valueState.new = this.value;
  }

  updateTrend() {
    if (!this.valueState.old || !this.valueState.new) {
      this.trend = 'same';
      return;
    }

    if (this.valueState.new > this.valueState.old) {
      this.trend = 'increased';
    }
    if (this.valueState.new === this.valueState.old) {
      this.trend = 'same';
    }
    if (this.valueState.new < this.valueState.old) {
      this.trend = 'decreased';
    }
  }
}
