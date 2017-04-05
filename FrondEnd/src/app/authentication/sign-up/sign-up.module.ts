import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SignUpComponent} from "./sign-up.component";
import {SignUpService} from "./sign-up.service";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap";
import {LoadingAnimateModule, LoadingAnimateService} from "ng2-loading-animate";

import {BusyModule} from "angular2-busy";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : 'signup', component : SignUpComponent}
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    LoadingAnimateModule.forRoot(),
    //BusyModule

  ],
  declarations: [SignUpComponent],
  providers : [SignUpService, LoadingAnimateService],

})
export class SignUpModule { }
