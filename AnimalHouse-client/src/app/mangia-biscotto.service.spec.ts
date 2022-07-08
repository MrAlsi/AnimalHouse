import { TestBed } from '@angular/core/testing';

import { MangiaBiscottoService } from './mangia-biscotto.service';

describe('MangiaBiscottoService', () => {
  let service: MangiaBiscottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangiaBiscottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
