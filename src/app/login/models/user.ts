export class User {
    constructor(){

    }

    userId:string;
    password:string;

    toString(){
        return 'userId='+this.userId+'&'+'password='+this.password;
    }
}
