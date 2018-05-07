import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, ViewContainerRef } from '@angular/core';
import { SearchComponentManagerDirective } from '../../directives/search-component-manager.directive';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SeatDetailsComponent } from '../seat-details/seat-details.component';
import { ViewContainerData } from '@angular/core/src/view';
import { ComponentCreationService } from '../../../shared/services/component-creation.service';
import { SearchResultDataService } from '../../services/search-result-data.service';
import { SearchCompViewRefService } from '../../services/search-comp-view-ref.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  width: string;
  rowNum:number=1236;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private componentCreationService: ComponentCreationService
  ,private searchResDataService:SearchResultDataService,private viewContainerRefService:SearchCompViewRefService) {
  }

  @ViewChild(SearchComponentManagerDirective) searchComponentResMngr: SearchComponentManagerDirective;


  ngOnInit() {
    //this.createSearchSubComponent(null, SearchResultComponent, null);
    //Prepare Data
     let viewContainerRef:ViewContainerRef=this.searchComponentResMngr.viewContainerRef;
     this.componentCreationService.createComponent(SearchResultComponent,viewContainerRef,this.searchResDataService.getData());
     console.log("Component created success");
     this.viewContainerRefService.setViewContainerRef(viewContainerRef);
  }

  // createSearchSubComponent(viewContainer: ViewContainerData, component: any, data: Object) {
  //   let componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
  //   let viewContainerRef = this.searchComponentResMngr.viewContainerRef;
  //   let componentRef = viewContainerRef.createComponent(componentFactory);
  //   componentRef.instance.data = data;//Passing data to component..
  //   //viewContainerRef.
  //   console.log("Component created...");
  // }

  addData() {
   // this.createSearchSubComponent(null, SeatDetailsComponent, null);
   this.searchResDataService.pushData({ busNo:this.rowNum, startingPoint: 'A', endingPoint: 'B', depTime: "10PM", arrTIme: "6AM", travelTime: "5.6hr" });
   this.rowNum++;
 
  }

  displaySeatDetailComponent(seatDetails: {}) {
    //this.createSearchSubComponent(null, SeatDetailsComponent, seatDetails);
  }


}
