import { Component, OnInit } from '@angular/core';
import { ComponentCreationService } from '../../../shared/services/component-creation.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchResultDataService } from '../../services/search-result-data.service';
import { SearchCompViewRefService } from '../../services/search-comp-view-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-details',
  templateUrl: './seat-details.component.html',
  styleUrls: ['./seat-details.component.css']
})
export class SeatDetailsComponent implements OnInit {

  data:Object;
  seatDetails:Object;

  constructor(private componentCreationService:ComponentCreationService,private searchResDataService:SearchResultDataService,
  private viewConRef:SearchCompViewRefService,
  private router:Router) { }

  ngOnInit() {
   // this.seatDetails=this.data["seatDetails"];
   console.log(this.data);
   this.seatDetails=this.data;
   this.seatDetails['seatInfo']=[
                                [{'seatNo':'1A','isBooked':'true'},{'seatNo':'1B','isBooked':'true'},{'seatNo':'1C'},{'seatNo':'1D'}],
                                [{'seatNo':'2A'},{'seatNo':'2B','isBooked':'true'},{'seatNo':'2C'},{'seatNo':'2D','isBooked':'true'}],
                                [{'seatNo':'3A','isBooked':'true'},{'seatNo':'3B','isBooked':'true'},{'seatNo':'3C'},{'seatNo':'3D','isBooked':'true'}],
                                [{'seatNo':'4A','isBooked':'true'},{'seatNo':'4B','isBooked':'true'},{'seatNo':'4C'},{'seatNo':'4D','isBooked':'true'}],
                                [{'seatNo':'5A','isBooked':'true'},{'seatNo':'5B'},{'seatNo':'5C'},{'seatNo':'5D'}],];
  }
  displaySearchResults(){
    this.componentCreationService.createComponent(SearchResultComponent,this.viewConRef.getViewContainerRef(),this.searchResDataService.getData(),true);
  }

  routeToBooking(seatInfo:Object){
    this.router.navigate(['home/booking']);
  }

}
