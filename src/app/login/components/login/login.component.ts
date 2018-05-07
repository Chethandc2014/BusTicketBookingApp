import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { AuthService } from '../../../shared/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [User]
})
export class LoginComponent implements OnInit {


  loginUser: User;
  isLoginError: boolean = false;
  loginErrorMess = "";

  constructor(private router: Router, private user: User, private http: Http, private authService: AuthService) {
    this.loginUser = this.user;
  }

  ngOnInit() {


  }

  login() {


    let observable = this.authService.login(this.loginUser);
    observable.subscribe((response) => {
      let responseBody = JSON.parse(response['_body']);

      if (responseBody.isLoginSuccess) {
        this.router.navigate(['./home']);
      } else {
        this.isLoginError = true;
        this.loginErrorMess = responseBody.message;
      }
    });
  }

  register() {
    this.router.navigate(['./register/basicinfo']);
  }

}
