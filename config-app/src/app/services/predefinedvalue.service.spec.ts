import { TestBed } from '@angular/core/testing';

import { PredefinedValueService } from './predefinedvalue.service';

describe('PredefinedValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredefinedValueService = TestBed.get(PredefinedValueService);
    expect(service).toBeTruthy();
  });
});
