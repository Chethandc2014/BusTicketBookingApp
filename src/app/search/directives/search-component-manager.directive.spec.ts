import { SearchComponentManagerDirective } from './search-component-manager.directive';
import { ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('SearchComponentManagerDirective', () => {

  beforeEach(()=>{
   // TestBed()
  })

  it('should create an instance', () => {
   let  viewConRef:ViewContainerRef;
    const directive = new SearchComponentManagerDirective(viewConRef);
    expect(directive).toBeTruthy();
  });
});
