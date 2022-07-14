import { TestBed } from '@angular/core/testing';

import { ControllaCodiceService } from './controlla-codice.service';

describe('ControllaCodiceService', () => {
  let service: ControllaCodiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllaCodiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
