import {Component, OnInit, ElementRef, AfterViewInit, ViewChildren, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControlName, AbstractControl, FormControl} from "@angular/forms";
import {Subscription, Observable} from "rxjs";
import { FormValidator} from "../../shared/form-control";
import {Customer} from "./customer";
import {SignUpService} from "./sign-up.service";
import {ModalDirective} from "ng2-bootstrap";
import {LoadingAnimateService} from "ng2-loading-animate";



function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let passwordControl = c.get('password');
  let confirmPasswordControl = c.get('confirmPassword');
  if (passwordControl.pristine || confirmPasswordControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmPasswordControl.value) {
    return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})



export class SignUpComponent implements OnInit,AfterViewInit {
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];
  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;

  pageTitle: string = "SignUp";
  signUpForm :  FormGroup;
  errorMessage: string;
  customer: Customer;
  showModal : boolean = false;
  modalMessage : string = '';

  private sub: Subscription;

  private formValidator: FormValidator ;
  busy : Subscription;
  displayeErrorMessage: {[key: string]: string } = {};
  private validationMessage: {[key: string]: {[key: string]: string}};


  constructor(private fb: FormBuilder, private signUpService : SignUpService,
              private _loadingSvc: LoadingAnimateService) {
    this.validationMessage = {
      firstName: {
        required: 'First Name is required',
        minlength: 'First Name must be more than 3 characters'
      },
      secondName: {
        required: 'Second Name is required',
        minlength: 'Second Name must be more than 3 characters'
      },
      username: {
        required: 'Username is required',
      },
      email: {
        required: 'Email is required',
        pattern: 'Email should be like xy@zt.sk'
      },
      password: {
        required: 'Password is required'
      },
      confirmPassword: {
        required: 'Password is required',
        match:'Password mismatch'
      }

    }
    this.formValidator=new FormValidator(this.validationMessage)
  };

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required,
        Validators.minLength(2)]],
      secondName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      passwordMatch: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validator:  passwordMatcher})
    });
console.log(this.signUpForm);
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
    // Merge the blur event observable with the valueChanges observable
    Observable.merge(this.signUpForm.valueChanges, ...controlBlurs).debounceTime(1000).subscribe(value => {
      this.displayeErrorMessage = this.formValidator.processMessages(this.signUpForm);
    });
  }

  save() {
    this.onShowModal();
    this.startLoading();
    this.addUser();

  }

  private addUser(){
      // Copy the form values over the product object values
      let user = Object.assign({}, this.customer, this.signUpForm.value);
      this.signUpService.addUser(user).subscribe((data) => this.modalMessage = data ,
        (error: any) => this.errorMessage = <any>error);
       this.modalMessage = this.errorMessage
debugger
  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.showModal = false;
  }

  onShowModal(){
    this.showModal = true;
  }

  startLoading(){
    this._loadingSvc.setValue(true);
  }
stopLoading(){
    this._loadingSvc.setValue(false);
}

}
