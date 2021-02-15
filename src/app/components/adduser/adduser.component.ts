import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router } from '@angular/router';
export class User {
  public name: any;
  public email: any;
  public balance: any;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  newUser = new User();
  constructor(private service:AppService,public router:Router) { }
  
  ngOnInit(): void {
  }
  postone(){
    if(!this.newUser.name){
      alert("Please enter name");
    }
    else if(!this.newUser.email){
      alert("Please enter email");
    }
    else if(!this.newUser.balance){
      alert("Please enter balance");
    }
    else{
      this.service.postuser(this.newUser).subscribe(data=>{
        this.router.navigate(['/allusers']);
      })
    }
  }

}
