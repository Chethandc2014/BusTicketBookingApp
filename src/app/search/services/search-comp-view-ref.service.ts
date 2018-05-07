import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class SearchCompViewRefService {

  constructor() { }
 
  private viewContainerRef:ViewContainerRef;

  getViewContainerRef(){
  return this.viewContainerRef;
  }

  setViewContainerRef(viewConRef:ViewContainerRef){
     this.viewContainerRef=viewConRef;
  }


}
