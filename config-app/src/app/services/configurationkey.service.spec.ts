import { TestBed } from '@angular/core/testing';

import { ConfigurationKeyService } from './configurationkey.service';

describe('ConfigurationkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurationKeyService = TestBed.get(ConfigurationKeyService);
    expect(service).toBeTruthy();
  });
});
