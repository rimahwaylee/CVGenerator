import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import  {HomeComponent} from  "./home/home.component";
import {SignUpModule} from "./authentication/sign-up/sign-up.module";
import {DropdownModule} from "ng2-dropdown";
import {TemplatesComponent} from "./templates/templates.component";
import {LoginModule} from "./authentication/login/login.module";
import {ModalModule} from "ng2-bootstrap";
import {Viewtemplate1Component} from "./templates/template1/viewtemplate1.component";
import {Viewtemplate2Component} from "./templates/template2/viewtemplate2.component";
import {Viewtemplate3Component} from "./templates/template3/viewtemplate3.component";

import {LoadingAnimateModule, LoadingAnimateService} from "ng2-loading-animate";



@NgModule({
  declarations: [
    AppComponent,HomeComponent, TemplatesComponent,Viewtemplate1Component,Viewtemplate2Component,Viewtemplate3Component
  ],
  imports: [
    ModalModule.forRoot(),
    LoadingAnimateModule.forRoot(),
    RouterModule.forRoot([
      {path : 'home' , component : HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      {path : 'templates' , component : TemplatesComponent },
      {path : 'viewtemplate1' , component : Viewtemplate1Component },
      {path : 'viewtemplate2' , component : Viewtemplate2Component },
      {path : 'viewtemplate3' , component : Viewtemplate3Component }
    ]) ,
    BrowserModule,
    SignUpModule,
    DropdownModule,
    ModalModule,
    LoginModule,
    BrowserModule,
    ModalModule.forRoot(),
  ],
  //providers: [],
  providers : [LoadingAnimateService],
  bootstrap: [AppComponent]

})
export class AppModule { }
