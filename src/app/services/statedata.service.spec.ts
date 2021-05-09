import { TestBed } from '@angular/core/testing';

import { StatedataService } from './statedata.service';

describe('StatedataService', () => {
  let service: StatedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
