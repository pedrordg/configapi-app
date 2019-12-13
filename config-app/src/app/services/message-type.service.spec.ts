import { TestBed } from '@angular/core/testing';

import { MessageTypeService } from './message-type.service';

describe('MessageTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageTypeService = TestBed.get(MessageTypeService);
    expect(service).toBeTruthy();
  });
});
