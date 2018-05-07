import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ComponentCreationService } from '../../../shared/services/component-creation.service';
import { SeatDetailsComponent } from '../seat-details/seat-details.component';
import { SearchCompViewRefService } from '../../services/search-comp-view-ref.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  data: Array<Object>; //used for while creating dynamic component..
  searchRes: Array<Object>;

  constructor(private componentCreationService: ComponentCreationService, private searchComViewConRefService: SearchCompViewRefService) { }

  ngOnInit() {
    this.searchRes = this.data;
  }

  checkSeatAvailability(index) {
    this.componentCreationService.createComponent(SeatDetailsComponent, this.searchComViewConRefService.getViewContainerRef(), this.searchRes[index],
      true);
    //console.log("TEsts"+index);
  }


}
