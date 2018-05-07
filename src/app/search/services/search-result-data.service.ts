import { Injectable } from '@angular/core';

@Injectable()
export class SearchResultDataService {

  constructor() { }

  private searchResultData: Array<any> = [
    { busNo: '1234', startingPoint: 'A', endingPoint: 'B', depTime: "10PM", arrTIme: "6AM", travelTime: "5.6hr" },
    { busNo: '1235', startingPoint: 'A', endingPoint: 'B', depTime: "10PM", arrTIme: "6AM", travelTime: "5.6hr" },
  ];

  getData(): Array<any> {
    return this.searchResultData;
  }

  setData(data: Array<any>) {
    this.searchResultData = data;
  }

  pushData(obj:Object){
    this.searchResultData.push(obj);
  }

}
