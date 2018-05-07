import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class RegistrationDataService {

  private regUserData: FormGroup;

  getUserInfo(): FormGroup {
    return this.regUserData;
  }

  setUserInfo(userInfo:FormGroup) {
    this.regUserData=userInfo;
  }

}
