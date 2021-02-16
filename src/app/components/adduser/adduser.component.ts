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
  arr : any;
  users = [];
  usernames = [];
  loader = true;
  constructor(private service:AppService,public router:Router) { }
  
  ngOnInit(): void {
    this.service.getusers().subscribe(data=>{
      this.arr = data;
      this.test();
      console.log(this.usernames);
      this.loader = false;
    })
  }

  test(){
    this.arr.forEach(element => {
      if(element.name){
        this.users.push(element);
        this.usernames.push(element.name);
      }
    });
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
      if(this.usernames.includes(this.newUser.name)===false){
        this.service.postuser(this.newUser).subscribe(data=>{
          this.router.navigate(['/allusers']);
        })
      }
      else{
        alert("User already exists");
      }
    }
  }

}
