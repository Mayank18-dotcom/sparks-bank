import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    url : String = "https://sparks-bank-backend-link.herokuapp.com";

    constructor(private http:HttpClient) { 
    }
    getusers(){
        return this.http.get(this.url+'/getusers');
    }
    getamount(){
        return this.http.get(this.url+'/getamount');
    }
    postuser(user){
        return this.http.post(this.url+'/postusers',user);
    }
    posttrans(sendname,newTrans){
        console.warn(newTrans);
        return this.http.post(this.url+'/postamount/'+sendname,newTrans);
    }
    
}