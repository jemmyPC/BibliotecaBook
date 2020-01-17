import { TestBed } from '@angular/core/testing';

import { ServiceBookService } from './service-book.service';

describe('ServiceBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookService = TestBed.get(ServiceBookService);
    expect(service).toBeTruthy();
  });
});
