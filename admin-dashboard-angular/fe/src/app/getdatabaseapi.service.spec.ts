import { TestBed } from '@angular/core/testing';

import { GetdatabaseapiService } from './getdatabaseapi.service';

describe('GetdatabaseapiService', () => {
  let service: GetdatabaseapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatabaseapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
