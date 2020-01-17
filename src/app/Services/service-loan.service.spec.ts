import { TestBed } from '@angular/core/testing';

import { ServiceLoanService } from './service-loan.service';

describe('ServiceLoanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLoanService = TestBed.get(ServiceLoanService);
    expect(service).toBeTruthy();
  });
});
