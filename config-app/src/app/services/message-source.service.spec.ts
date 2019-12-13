import { TestBed } from '@angular/core/testing';

import { MessageSourceService } from './message-source.service';

describe('MessageSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageSourceService = TestBed.get(MessageSourceService);
    expect(service).toBeTruthy();
  });
});
