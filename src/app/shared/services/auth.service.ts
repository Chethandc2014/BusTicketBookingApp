import { Injectable } from '@angular/core';
import { HttpClient, RequestOptions, Headers } from '@angular/HttpClient';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../../login/models/user';

@Injectable()
export class AuthService {

  constructor(private HttpClient: HttpClient) { }


  login(user: User): Observable<any> {
    let body = user.toString();
    let header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let observable = this.HttpClient.post(AppConfig.getConfigData('apiUrl') + 'login', body
      , new RequestOptions({ headers: header }))
    return observable;
  }

}
