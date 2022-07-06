import { TestBed } from '@angular/core/testing';

import { DomandeQuizService } from './domande-quiz.service';

describe('DomandeQuizService', () => {
  let service: DomandeQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomandeQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
