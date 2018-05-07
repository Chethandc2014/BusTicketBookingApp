import { Injectable, ComponentFactory, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable()
export class ComponentCreationService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }


  createComponent(component: any, viewContainerRef: ViewContainerRef, data: Object,isClearView?:boolean) {
    if(isClearView){
      viewContainerRef.clear();
    }
    let componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
    //let viewContainerRef = this.searchComponentResMngr.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = data;//Passing data to component..
  }

}
