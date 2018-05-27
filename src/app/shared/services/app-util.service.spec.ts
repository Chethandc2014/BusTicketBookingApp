import { TestBed, inject } from '@angular/core/testing';

import { AppUtilService } from './app-util.service';

describe('AppUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUtilService]
    });
  });

  it('should be created', inject([AppUtilService], (service: AppUtilService) => {
    expect(service).toBeTruthy();
  }));
});
