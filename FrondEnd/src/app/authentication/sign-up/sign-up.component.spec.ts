///<reference path="../../../../node_modules/@angular/core/src/debug/debug_node.d.ts"/>
import {async, ComponentFixture, TestBed, inject, fakeAsync} from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import {FormsModule, ReactiveFormsModule, FormControlName} from "@angular/forms";
import {BrowserModule, By} from "@angular/platform-browser";
import {DebugElement, ElementRef, ViewChildren, Input} from "@angular/core";
import {ModalModule} from "ng2-bootstrap";
import {SignUpService} from "./sign-up.service";
import {Customer} from "./customer";
import {Http, HttpModule, ConnectionBackend} from "@angular/http";
import any = jasmine.any;
import {LoadingAnimateModule, LoadingAnimateService} from "ng2-loading-animate";


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let  debugHelpblck : DebugElement[];
  let user : Customer;
  let  debugSubmitButtun :DebugElement;
  let userService : any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent],
      imports: [FormsModule, BrowserModule, ReactiveFormsModule,
      ModalModule.forRoot(),HttpModule, LoadingAnimateModule.forRoot()],
      providers : [SignUpService, Http, ConnectionBackend,LoadingAnimateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    debugHelpblck = fixture.debugElement.queryAll(By.css('.help-block'));
    component.ngOnInit();
    //component.ngAfterViewInit();
    fixture.detectChanges();

  });

  it('should be  created', () => {
    expect(component).toBeTruthy();
  });


  describe('SignUp form Test : ',() => {

    it('The SignUp form should be invalid when it is empty ', () => {
      expect(component.signUpForm.valid).toBeFalsy()
    });

    describe('firstName Test: ', () => {
      it(' firstName field  validity  ', () => {
        let firstName = component.signUpForm.get('firstName');
        expect(firstName.valid).toBeFalsy('should be initially invalid');
        let errors1 = firstName.errors || {}
        expect(errors1['required']).toBeTruthy(' should be required');
        //expect(debugHelpblck[0].nativeElement.textContent).toEqual('first Name is required');
        firstName.setValue('w');
        let errors = firstName.errors || {}
        expect(errors['minlength']).toBeTruthy(' should be more than 2 caracters');
      });
    });

    describe('secondName Test: ', () => {
      it(' secondName field  validity  ', () => {
        let secondName = component.signUpForm.get('secondName');
        expect(secondName.valid).toBeFalsy('should be initially invalid');
        let errors1 = secondName.errors || {}
        expect(errors1['required']).toBeTruthy(' should be required');
        secondName.setValue('w');
        let errors = secondName.errors || {}
        expect(errors['minlength']).toBeTruthy(' should be more than 2 caracters');
      });
    });

    describe('username Test: ', () => {
      it(' username field  validity  ', () => {
        let username = component.signUpForm.get('username');
        expect(username.valid).toBeFalsy('should be initially invalid');
        let errors = username.errors || {}
        expect(errors['required']).toBeTruthy(' should be required');
      });
    });

    describe('email Test: ', () => {
      it(' email field  validity  ', () => {
        let email = component.signUpForm.get('email');
        expect(email.valid).toBeFalsy('should be initially invalid');
        let errors = email.errors || {}
        expect(errors['required']).toBeTruthy(' should be required');
        email.setValue('xyztvr');
        let errors2 = email.errors || {}
        expect(errors2['pattern']).toBeTruthy(' should be like xy@zt.vr');

      });
    });

    describe('password Test: ', () => {
      it(' password field  validity  ', () => {
        let password = component.signUpForm.get('passwordMatch').get('password');
        expect(password.valid).toBeFalsy('should be initially invalid');
        let errors = password.errors || {}
        expect(errors['required']).toBeTruthy(' should be required');
      });
    });

    describe('confirmPassword Test: ', () => {
      it(' confirmPassword field  validity  ', () => {
        let confirmPassword = component.signUpForm.get('passwordMatch').get('confirmPassword');
        expect(confirmPassword.valid).toBeFalsy('should be initially invalid');
        let errors = confirmPassword.errors || {}
        expect(errors['required']).toBeTruthy(' should be required');
      });
    });

    describe('Test Submit button : ', () => {
      it('form should be invalid when it is empty ',() => {
        let signup = component.signUpForm;
        expect(signup.valid).toBeFalsy();
      });

     it('form should be valid when it has no errors',() => {
       let signup = component.signUpForm;
        signup.get('firstName').setValue('BEN CHAABEN');
        signup.get('secondName').setValue('wissem');
        signup.get('username').setValue('wiss013');
        signup.get('email').setValue('xz@gmail.com');
        signup.get('passwordMatch').get('password').setValue('wissem');
        signup.get('passwordMatch').get('confirmPassword').setValue('wissem');
        expect(signup.valid).toBeTruthy();
      });

     /*it('should save the user submetted',inject([SignUpService], (signUpService : SignUpService) => {
       component.save();
       let signup = component.signUpForm;
       signup.get('firstName').setValue('BEN CHAABEN');
       signup.get('secondName').setValue('wissem');
       signup.get('username').setValue('wiss013');
       signup.get('email').setValue('xz@gmail.com');
       signup.get('passwordMatch').get('password').setValue('wissem');
       signup.get('passwordMatch').get('confirmPassword').setValue('wissem');
       let show = component.showModal;
       expect(show).toBeTruthy();
     }));*/
    });


});

  /*describe('SignUp service Test within the component : ',() => {


   /* it(' addUser should be defined ',() => {
      expect(component.addUser()).toBeDefined();
    });*/

  /*});

  /*it('signup form container should be : ... ',() => {

    let formSyles = debug.query(By.css('.signup-form-container ')).styles;
    fixture.detectChanges()
    expect(formSyles).toBe(`{
    border-radius:3px;
    background:#ffffff;
    margin:4% auto;
    max-width:500px;
    border-top: 3px solid #00c0ef;
    box-shadow:0 1px 5px rgba(0, 0, 0, 0.1)
  }`,'form container styles');
  });

  it('signup form header should be ',() => {

    let formSyles = debug.query(By.css('.form-header ')).styles;
    expect(formSyles).toBe(`{

  color:#444;
  display:block;
  padding:20px;
  position:relative;
  border-bottom:1px solid #f4f4f4;
}`,'form container styles');
  });*/



});
