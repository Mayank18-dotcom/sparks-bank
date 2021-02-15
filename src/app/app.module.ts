import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ViewtransComponent } from './components/viewtrans/viewtrans.component';
import { MaketransComponent } from './components/maketrans/maketrans.component';
import { HomeComponent } from './components/home/home.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { MainfooterComponent } from './components/mainfooter/mainfooter.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgCircleProgressModule} from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ViewtransComponent,
    MaketransComponent,
    HomeComponent,
    MainnavComponent,
    MainfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      percent:100,
      animation:true,
      radius:50,
      outerStrokeWidth:8,
      innerStrokeWidth:4,
      titleColor: "white",
      outerStrokeColor:"rgba(107, 114, 128, var(--tw-bg-opacity))",
      innerStrokeColor:"white",
      animationDuration:300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
