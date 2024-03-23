import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityModalComponent } from './add-city-modal.component';

describe('AddCityModalComponent', () => {
  let component: AddCityModalComponent;
  let fixture: ComponentFixture<AddCityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCityModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
