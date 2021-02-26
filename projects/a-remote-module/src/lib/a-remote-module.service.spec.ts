import { TestBed } from '@angular/core/testing';

import { ARemoteModuleService } from './a-remote-module.service';

describe('ARemoteModuleService', () => {
  let service: ARemoteModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ARemoteModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
