import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  constructor() { }
 
  private userData:{}={'userName':'Chethana D C','lastLoginTime':'10/02/2018 10.10 PM'};

  getUserData(){
    return this.userData;
  }

  setUserData(userData:{}){
   this.userData=userData;
  }

}
