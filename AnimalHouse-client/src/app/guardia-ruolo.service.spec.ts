import { TestBed } from '@angular/core/testing';

import { GuardiaRuoloService } from './guardia-ruolo.service';

describe('GuardiaRuoloService', () => {
  let service: GuardiaRuoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaRuoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
