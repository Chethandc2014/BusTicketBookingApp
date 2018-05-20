import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegistrationDataService } from "../../services/registration-data.service";

@Component({
  selector: "basic-info",
  templateUrl: "./basic-info.component.html",
  styleUrls: ["./basic-info.component.css"]
})
export class BasicInfoComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private regDataService: RegistrationDataService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: [""],
      middleName: [""],
      lastName: [""],
      mailId: [""],
      mobileNo: ["", [Validators.required, Validators.min(10)]]
    });
  }

  address() {
    console.log("address..  ");
    this.regDataService.setUserInfo(this.registrationForm);
    console.log(this.regDataService);
    let testData: FormGroup = this.regDataService.getUserInfo();
    console.log(testData);
    this.router.navigate(["./register/address"]);
  }
}
