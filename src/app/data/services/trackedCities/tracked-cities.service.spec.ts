import { TestBed } from '@angular/core/testing';

import { TrackedCitiesService } from './tracked-cities.service';

describe('TrackedCitiesService', () => {
  let service: TrackedCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
