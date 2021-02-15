import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewtrans',
  templateUrl: './viewtrans.component.html',
  styleUrls: ['./viewtrans.component.css']
})
export class ViewtransComponent implements OnInit {
  constructor(private service:AppService,public router:ActivatedRoute,public rt:Router) { }
  amounts:any;
  loader = true;
  ngOnInit(): void {
    this.service.getamount().subscribe(data=>{
      this.amounts = data;
      console.log(this.amounts);
      this.loader = false;
    })
  }

}
