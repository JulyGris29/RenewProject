import { TestBed } from '@angular/core/testing';

import { EnergyDetailService } from './energy-detail.service';

describe('EnergyDetailService', () => {
  let service: EnergyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
