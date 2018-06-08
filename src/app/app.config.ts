export class AppConfig {


   static getConfigData(key:string):string{
        let data = {
           'api-url':'http://localhost:8080/api'
        }

       let retVal=data[key];
        return retVal;
    }
    

}