import { TestBed } from '@angular/core/testing';

import { HospitaldataService } from './hospitaldata.service';

describe('HospitaldataService', () => {
  let service: HospitaldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitaldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
