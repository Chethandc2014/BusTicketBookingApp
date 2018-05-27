import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AppConfig } from "../../app.config";
import { User } from "../../login/models/user";
import { AppUtilService } from "./app-util.service";

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(user: User): Observable<any> {
    let body = user.toString();
    let observable = this.http.post(
      AppConfig.getConfigData("api-url") + "/login",
      body,
      AppUtilService.getAppHeadeForEncoded()
    );
    return observable;
  }
}
