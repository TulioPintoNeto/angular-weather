import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableRowComponent } from './clickable-row.component';

describe('ClickableRowComponent', () => {
  let component: ClickableRowComponent;
  let fixture: ComponentFixture<ClickableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickableRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
