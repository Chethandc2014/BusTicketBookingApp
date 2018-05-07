import { Component, OnInit } from '@angular/core';
import { RegistrationDataService } from '../../services/registration-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  regForm:FormGroup;

  constructor(private regDataService:RegistrationDataService,private fb:FormBuilder) { 
  }

  ngOnInit() {
    this.regForm=this.regDataService.getUserInfo();
    this.regForm.addControl('address',this.fb.group({
      country:[''],
      state:[''],
      city:['']
    }));
   
    console.log(this.regForm);
  }

  register(){
    console.log("Inside of REG");
  }

}
