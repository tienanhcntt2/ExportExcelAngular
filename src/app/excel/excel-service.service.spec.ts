import { TestBed } from '@angular/core/testing';

import { ExcelServiceService } from './excel-service.service';

describe('ExcelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelServiceService = TestBed.get(ExcelServiceService);
    expect(service).toBeTruthy();
  });
});
