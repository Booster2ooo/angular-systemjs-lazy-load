import { TestBed } from '@angular/core/testing';

import { AnotherRemoteModuleService } from './another-remote-module.service';

describe('AnotherRemoteModuleService', () => {
  let service: AnotherRemoteModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherRemoteModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
