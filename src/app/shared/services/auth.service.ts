import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../../login/models/user';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }


  login(user: User): Observable<any> {
    let body = user.toString();
    let header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let observable = this.http.post(AppConfig.getConfigData('api-url') + 'login', body
      , new RequestOptions({ headers: header }))
    return observable;
  }

}
