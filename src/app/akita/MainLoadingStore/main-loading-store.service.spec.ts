import { TestBed } from '@angular/core/testing';

import { MainLoadingStoreService } from './main-loading-store.service';

describe('MainLoadingStoreService', () => {
  let service: MainLoadingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainLoadingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
