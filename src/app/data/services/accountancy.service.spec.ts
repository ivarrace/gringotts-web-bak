import { TestBed } from '@angular/core/testing';

import { AccountancyService } from './accountancy.service';

describe('AccountancyService', () => {
  let service: AccountancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
