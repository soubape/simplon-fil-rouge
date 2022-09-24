import { TestBed } from '@angular/core/testing';

import { ServicesAjoutService } from './services-ajout.service';

describe('ServicesAjoutService', () => {
  let service: ServicesAjoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAjoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
