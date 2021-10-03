import { TestBed } from '@angular/core/testing';

import { CrudFunctionService } from './crud-function.service';

describe('CrudFunctionService', () => {
  let service: CrudFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
