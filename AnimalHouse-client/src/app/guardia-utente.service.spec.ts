import { TestBed } from '@angular/core/testing';

import { GuardiaUtenteService } from './guardia-utente.service';

describe('GuardiaUtenteService', () => {
  let service: GuardiaUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
