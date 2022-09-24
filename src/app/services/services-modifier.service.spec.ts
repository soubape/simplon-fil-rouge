import { TestBed } from '@angular/core/testing';

import { ServicesModifierService } from './services-modifier.service';

describe('ServicesModifierService', () => {
  let service: ServicesModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
