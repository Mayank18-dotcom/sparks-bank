import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import { Router,ActivatedRoute } from '@angular/router';
export class Trans {
  public sender: any;
  public reciever: any;
  public amount: any;
}
@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {
  sendname:any;
  newTrans = new Trans();
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) {
    this.router.params.subscribe(params=>{
      this.sendname = params.name;
    })
   }

  ngOnInit(): void {
    this.newTrans.sender = this.sendname;
  }
  postone(){
    console.log(this.newTrans);
    //this.service.posttrans(this.sendname,this.newTrans);
    this.service.posttrans(this.sendname,this.newTrans).subscribe(data=>{
      console.warn(data);
      this.rt.navigate(["/history"]);
    })
  }

}
