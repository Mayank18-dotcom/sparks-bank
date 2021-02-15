import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
export class Trans {
  public sender: any;
  public reciever: any;
  public amount: any;
}
@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.css']
})
export class MainfooterComponent implements OnInit {
  arr : any;
  users = []
  newTrans = new Trans();
  sendername:any;
  myemail:string;
  loader = true;
  mybal:number;
  constructor(private service:AppService,public router:ActivatedRoute, private rt:Router) { 
    this.router.params.subscribe(param=>{
      this.sendername=param.name;
    })
  }

  ngOnInit(): void {
    this.newTrans.sender = this.sendername;
    this.service.getusers().subscribe(data=>{
      console.log(data);
      this.arr = data;
      this.test();
      this.loader = false;
    })
  }

  postone(){
    if(!this.newTrans.reciever){
      alert("Receptant's Name required !");
    }
    else if(!this.newTrans.amount){
      alert("Amount required !");
    }
    else if(this.newTrans.amount <= 0){
      alert("Negative or zero value of amount not allowed");
    }
    else if(this.newTrans.amount > this.mybal){
      alert("Insufficient Funds !");
    }
    else{
      this.service.posttrans(this.sendername,this.newTrans).subscribe(data=>{
        if(data=="Insufficient Funds !"){
          //alert(data);
        }
        else if(data=="Negative value not allowed !"){
          //alert(data);
        }
        else{
          this.rt.navigate(['/history']);
        }
      })
    }
  }

  test(){
    this.arr.forEach(element => {
      if(element.name && element.name !== this.sendername){
        this.users.push(element);
      }
      else if( element.name === this.sendername){
        this.myemail = element.email;
        this.mybal = element.balance;
        console.log(this.myemail);
        console.log(this.mybal);
      }
    });
  }

}
