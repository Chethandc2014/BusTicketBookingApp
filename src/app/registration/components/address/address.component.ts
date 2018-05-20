import { Component, OnInit } from "@angular/core";
import { RegistrationDataService } from "../../services/registration-data.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Http, RequestOptions,Headers} from "@angular/http";
import { AppConfig } from "../../../app.config";
import { Router } from "@angular/router";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private regDataService: RegistrationDataService,
    private fb: FormBuilder,
    private http: Http,
    private route:Router
  ) {}

  ngOnInit() {
    this.regForm = this.regDataService.getUserInfo();
    this.regForm.addControl(
      "address",
      this.fb.group({
        country: [""],
        state: [""],
        city: [""]
      })
    );

    console.log(this.regForm);
  }

  formPayLoad(group: FormGroup) {
    let payLoadObj = {};

    payLoadObj["firstName"] = group.get("firstName").value;
    payLoadObj["middleName"] = group.get("middleName").value;
    payLoadObj["lastName"] = group.get("lastName").value;
    payLoadObj["emailId"] = group.get("mailId").value;
    payLoadObj["mobileNo"] = group.get("mobileNo").value;
    let addressForm = group.get("address");
    let address = {};
    address["country"] = addressForm.get("country").value;
    address["state"] = addressForm.get("state").value;
    address["city"] = addressForm.get("city").value;
    payLoadObj["address"] = address;
    return payLoadObj;
  }
  register() {
    console.log("Inside of REG");
    console.log(this.regForm);
    let payloadObj = this.formPayLoad(this.regForm);
    let boy = {};
    let header = new Headers({ 'Content-Type': 'application/json' });
   // header.append('Access-Control-Allow-Origin', '*');
    this.http
      .post(AppConfig.getConfigData("api-url") + "register",payloadObj,new RequestOptions({ headers: header }))
      .subscribe(response => {
        console.log("---Response--");
        if(response["status"]===200){
            this.route.navigate(["./register/set-password"]);
        }else{
          console.log('Server issue.. Please try again latter...');
        }
        console.log(response);
      });
  }

}
