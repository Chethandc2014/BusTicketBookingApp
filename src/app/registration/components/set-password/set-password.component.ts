import { Component, OnInit } from "@angular/core";
import { RegistrationDataService } from "../../services/registration-data.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Http, RequestOptions,Headers } from "@angular/http";
import { AppConfig } from "../../../app.config";

@Component({
  selector: "app-set-password",
  templateUrl: "./set-password.component.html",
  styleUrls: ["./set-password.component.css"]
})
export class SetPasswordComponent implements OnInit {
  constructor(
    private regDataService: RegistrationDataService,
    private fb: FormBuilder,
    private http:Http
  ) {}
  private passwordForm: FormGroup;

  ngOnInit() {
    let emailId = this.regDataService.getUserInfo().get("mailId").value;
    console.log(emailId);
    this.passwordForm = this.fb.group({
      mailId: emailId,
      password: [""]
    });
  }


  setPassword(form:FormGroup){
    let payloadObj={};
    payloadObj['emailId']=form.get("mailId").value;
    payloadObj['password']=form.get("password").value;
    let header = new Headers({ 'Content-Type': 'application/json' });
    header.append('Access-Control-Allow-Origin', '*');
    let body=payloadObj;
    this.http.post(AppConfig.getConfigData('api-url')+'set-password',body
     ,new RequestOptions({ headers: header })).subscribe(response=>{

    });
  }
}
