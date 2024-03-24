import { TestBed } from '@angular/core/testing';

import { GlobalControllerService } from './global-controller.service';

describe('GlobalControllerService', () => {
  let service: GlobalControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
