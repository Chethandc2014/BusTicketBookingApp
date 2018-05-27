import { Component, OnInit } from "@angular/core";
import { RegistrationDataService } from "../../services/registration-data.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Http, RequestOptions,Headers} from "@angular/http";
import { AppConfig } from "../../../app.config";
import { Router } from "@angular/router";
import { AppUtilService } from "../../../shared/services/app-util.service";
import { ArrayType } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent implements OnInit {
  private regForm: FormGroup;
  private countryList: Array<any>;
  private stateList: Array<any>;
  private cityList:Array<any>;

  constructor(
    private regDataService: RegistrationDataService,
    private fb: FormBuilder,
    private http: Http,
    private route: Router
  ) {}

  ngOnInit() {
    
    this.createFormControl();
    this.http
      .get(
        AppConfig.getConfigData("api-url") + "/country",
        AppUtilService.getAppHeader()
      )
      .subscribe(response => {
        console.log(response["_body"]);
        if (response["status"] == 200) {
          this.countryList = JSON.parse(response["_body"]);
        }
      });
    console.log(this.regForm);
  }

  createFormControl() {

    this.regForm = this.regDataService.getUserInfo();
    this.regForm.addControl(
      "address",
      this.fb.group({
        country: [""],
        state: [""],
        city: [""]
      })
    );

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

    this.http
      .post(
        AppConfig.getConfigData("api-url") + "/register",
        payloadObj,
        AppUtilService.getAppHeader()
      )
      .subscribe(response => {
        console.log("---Response--");
        if (response["status"] === 200) {
          this.route.navigate(["./register/set-password"]);
        } else {
          console.log("Server issue.. Please try again latter...");
        }
        console.log(response);
      });
  }

  getStateList(countryCode){
   
    this.http
      .get(
        AppConfig.getConfigData("api-url") + "/country/"+countryCode+"/state",
        AppUtilService.getAppHeader()
      )
      .subscribe(response => {
        if(response['status']==200){
         this.stateList=JSON.parse(response['_body']);
        }
      });
  }



  getCityList(stateCode){

    let addressForm=this.regForm.controls['address'] as FormGroup 
    let countryCode=addressForm.controls['country'].value;

    this.http
      .get(
        AppConfig.getConfigData("api-url") + "/country/"+countryCode+"/state/"+stateCode,
        AppUtilService.getAppHeader()
      )
      .subscribe(response => {
        if(response['status']==200){
         this.cityList=JSON.parse(response['_body']);
        }
      });

  }
}
