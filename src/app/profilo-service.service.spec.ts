import { TestBed } from '@angular/core/testing';

import { ProfiloServiceService } from './profilo-service.service';

describe('ProfiloServiceService', () => {
  let service: ProfiloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
