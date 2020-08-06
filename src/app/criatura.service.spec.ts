import { TestBed } from '@angular/core/testing';

import { CriaturaService } from './criatura.service';

describe('CriaturaService', () => {
  let service: CriaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
