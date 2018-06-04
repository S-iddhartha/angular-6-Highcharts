import { TestBed, inject } from '@angular/core/testing';

import { EmployService } from './employ.service';

describe('EmployService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployService]
    });
  });

  it('should be created', inject([EmployService], (service: EmployService) => {
    expect(service).toBeTruthy();
  }));
});
