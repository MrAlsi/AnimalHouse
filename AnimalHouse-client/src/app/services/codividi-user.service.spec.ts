import { TestBed } from '@angular/core/testing';

import { CodividiUserService } from './codividi-user.service';

describe('CodividiUserService', () => {
  let service: CodividiUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodividiUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
