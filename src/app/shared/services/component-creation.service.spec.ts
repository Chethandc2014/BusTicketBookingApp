import { TestBed, inject } from '@angular/core/testing';

import { ComponentCreationService } from './component-creation.service';

describe('ComponentCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentCreationService]
    });
  });

  it('should be created', inject([ComponentCreationService], (service: ComponentCreationService) => {
    expect(service).toBeTruthy();
  })
  );

  
});
