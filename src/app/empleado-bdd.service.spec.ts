import { TestBed } from '@angular/core/testing';

import { EmpleadoBDDService } from './empleado-bdd.service';

describe('EmpleadoBDDService', () => {
  let service: EmpleadoBDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoBDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
