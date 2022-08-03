import { TestBed } from '@angular/core/testing';

import { PunteggiClassificaService } from './punteggi-classifica.service';

describe('PunteggiClassificaService', () => {
  let service: PunteggiClassificaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunteggiClassificaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
