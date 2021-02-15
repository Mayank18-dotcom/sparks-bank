import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-maketrans',
  templateUrl: './maketrans.component.html',
  styleUrls: ['./maketrans.component.css']
})
export class MaketransComponent implements OnInit {

  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { }
  arr : any;
  users = [];
  loader = true;
  ngOnInit(): void {
    this.service.getusers().subscribe(data=>{
      // console.log(data);
      this.arr = data;
      this.test();
      this.loader = false;
    })
  }

  test(){
    this.arr.forEach(element => {
      if(element.name){
        this.users.push(element);
      }
    });
  }

}
