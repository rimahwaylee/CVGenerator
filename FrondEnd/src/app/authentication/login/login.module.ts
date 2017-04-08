import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {path : "login", component : LoginComponent}
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
