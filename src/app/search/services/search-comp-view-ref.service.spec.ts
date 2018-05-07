import { TestBed, inject } from '@angular/core/testing';

import { SearchCompViewRefService } from './search-comp-view-ref.service';

describe('SearchCompViewRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCompViewRefService]
    });
  });

  it('should be created', inject([SearchCompViewRefService], (service: SearchCompViewRefService) => {
    expect(service).toBeTruthy();
  }));
});
