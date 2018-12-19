import { TestBed } from '@angular/core/testing';

import { PaginatorService } from './index';

describe('PaginatorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PaginatorService]
    })
  );

  it('should be created', () => {
    const service: PaginatorService = TestBed.get(PaginatorService);
    expect(service).toBeTruthy();
  });
});
