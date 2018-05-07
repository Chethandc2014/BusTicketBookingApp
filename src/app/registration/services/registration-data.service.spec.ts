import { TestBed, inject } from '@angular/core/testing';

import { RegistrationDataService } from './registration-data.service';

fdescribe('RegistrationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationDataService]
    });
  });

  it('should be created', inject([RegistrationDataService], (service: RegistrationDataService) => {
    expect(service).toBeTruthy();
    console.log("TEst..");
  }));
});
