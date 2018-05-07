import { TestBed, inject } from '@angular/core/testing';

import { SearchResultDataService } from './search-result-data.service';

describe('SearchResultDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResultDataService]
    });
  });

  it('should be created', inject([SearchResultDataService], (service: SearchResultDataService) => {
    expect(service).toBeTruthy();
  }));
});
