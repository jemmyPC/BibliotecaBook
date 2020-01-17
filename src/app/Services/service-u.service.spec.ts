import { TestBed } from '@angular/core/testing';

import { ServiceUService } from './service-u.service';

describe('ServiceUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceUService = TestBed.get(ServiceUService);
    expect(service).toBeTruthy();
  });
});
