import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {AdduserComponent} from './components/adduser/adduser.component'
import {MaketransComponent} from './components/maketrans/maketrans.component'
import {ViewtransComponent} from './components/viewtrans/viewtrans.component'
import {MainnavComponent} from './components/mainnav/mainnav.component'
import {MainfooterComponent} from './components/mainfooter/mainfooter.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'history',component:ViewtransComponent},
  {path:'allusers',component:MaketransComponent},
  {path:'makepayment/:name',component:MainfooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
