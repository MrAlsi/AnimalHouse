import { TestBed } from '@angular/core/testing';

import { AggiungiDBService } from './aggiungi-db.service';

describe('AggiungiDBService', () => {
  let service: AggiungiDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiungiDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
