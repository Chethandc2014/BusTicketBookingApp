import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'search-input-field',
  templateUrl: `./search-field.component.html`,
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {


  @Input() label: string;
  @Input() paddingLeft: string;

  searchValue = '';
  cities = ['BENGALORE', 'CHANNAI', 'MUMBAI', 'KOLKATTA', 'DELHI', 'PUNE'];//Need to change as AJAX Call
  filteredList = [];
  constructor() {
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

}
