import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[search-res-component-manager]'
})
export class SearchComponentManagerDirective {

  constructor(public viewContainerRef:ViewContainerRef) { 

  }

}
