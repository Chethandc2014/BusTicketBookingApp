import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";

@Injectable()
export class AppUtilService {

  private static header = new Headers({ "Content-Type": "application/json" });
  private static headerEncoded = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private static requestOptions = new RequestOptions({
    headers: AppUtilService.header
  });
  private static requestOptionsEncoded = new RequestOptions({
    headers: AppUtilService.headerEncoded
  });
  
  constructor() {}

  static getAppHeader() {
    return AppUtilService.requestOptions;
  }

  static getAppHeadeForEncoded() {
    return AppUtilService.requestOptionsEncoded;
  }
}
