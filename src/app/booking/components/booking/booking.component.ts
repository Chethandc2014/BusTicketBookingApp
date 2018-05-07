import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingDetails:{};
  constructor() { 
    this.bookingDetails={'seatNo':'1A','travelsNme':'Bangaloresafejourney Travels',
                         'dateOfJourney':'12/02/2018','departureTime':'10.10PM',
                        'totalAmount':'400'};
  }

  ngOnInit() {
  
  }

}
