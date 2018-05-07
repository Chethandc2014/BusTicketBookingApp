import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../shared/services/user-data.service';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor(private userDataService:UserDataService) { }
  user:Object;

  ngOnInit() {
    this.user=this.userDataService.getUserData();
  }

}
