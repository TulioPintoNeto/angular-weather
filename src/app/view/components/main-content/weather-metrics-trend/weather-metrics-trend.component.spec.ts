import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMetricsTrendComponent } from './weather-metrics-trend.component';

describe('WeatherMetricsTrendComponent', () => {
  let component: WeatherMetricsTrendComponent;
  let fixture: ComponentFixture<WeatherMetricsTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMetricsTrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherMetricsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
