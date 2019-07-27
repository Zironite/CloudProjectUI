import { TestBed } from '@angular/core/testing';

import { CloudSearchApiService } from './cloud-search-api.service';

describe('CloudSearchApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudSearchApiService = TestBed.get(CloudSearchApiService);
    expect(service).toBeTruthy();
  });
});
