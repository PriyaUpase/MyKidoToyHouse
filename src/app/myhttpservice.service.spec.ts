import { TestBed } from '@angular/core/testing';

import { MyhttpserviceService } from './myhttpservice.service';

describe('MyhttpserviceService', () => {
  let service: MyhttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
