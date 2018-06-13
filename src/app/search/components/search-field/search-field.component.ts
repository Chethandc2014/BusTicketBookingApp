import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../../../app.config';


@Component({
  selector: 'search-input-field',
  templateUrl: `./search-field.component.html`,
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {


  @Input() label: string;
  @Input() paddingLeft: string;

  private searchValue = '';
  //cities = ['BENGALORE', 'CHANNAI', 'MUMBAI', 'KOLKATTA', 'DELHI', 'PUNE'];//Need to change as AJAX Call
  private cities=[];
  private filteredList = [];
  
  constructor(private http:Http) {
  }

  ngOnInit() {
  }

  cityFilter() {
    if (this.searchValue !== "") {
      this.filteredList = this.cities.filter(value => {
        return value.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1;
      });
    } else {
      this.filteredList = [];
    }
  }

  select(city) {
    this.searchValue = city;
    this.filteredList = [];
  }

  getBookingCities(searchValue){
 
    if(searchValue==""){
    this.cities=[];
     return;
    }
    this.http.get(AppConfig.getConfigData('api-url')+`/search?city=`+searchValue).subscribe(response=>{
      if(response.status=200){
        let data=JSON.parse(response['_body']);
        this.cities=data;
      }
    });

  }

}
