import { TestBed } from '@angular/core/testing';

import { PunteggiQuizService } from './punteggi-quiz.service';

describe('PunteggiQuizService', () => {
  let service: PunteggiQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunteggiQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
