import { TestBed } from '@angular/core/testing';

import { MymsgService } from './mymsg.service';

describe('MymsgService', () => {
  let service: MymsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
