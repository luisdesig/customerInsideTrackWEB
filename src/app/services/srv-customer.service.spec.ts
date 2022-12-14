import { TestBed } from '@angular/core/testing';

import { SrvCustomerService } from './srv-customer.service';

describe('SrvCustomerService', () => {
  let service: SrvCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
