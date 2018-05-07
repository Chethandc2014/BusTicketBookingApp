export class AppConfig {


   static getConfigData(key:string):string{
        let data = {
           'apiUrl':'http://localhost:8080/api/'
        }

       let retVal=data[key];
        return retVal;
    }

}