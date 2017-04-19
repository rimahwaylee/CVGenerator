/**
 * Created by Rima on 3/30/2017.
 */

//import { Component} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {LoadingAnimateService} from "ng2-loading-animate";

import {Component, OnInit, ElementRef, AfterViewInit, ViewChildren, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControlName, AbstractControl, FormControl} from "@angular/forms";
import {Subscription, Observable} from "rxjs";




@Component({
  selector :'app-templates',
  templateUrl : './templates.component.html',
  styleUrls : ['templates.component.css'],
})

export class TemplatesComponent   {

  //@ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];
  //@ViewChild('autoShownModal') public autoShownModal:ModalDirective;

  pageTitle : string = 'Templates';



  //constructor( private _loadingSvc: LoadingAnimateService) {}


}


