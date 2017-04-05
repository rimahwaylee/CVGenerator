import {TestBed, inject, async} from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import {Http, BaseRequestOptions, ResponseOptions, Response} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

describe(' Testing SignUpService', () => {
  let subject : SignUpService;
  let backEnd : any;
  let user = {
    firstName : 'ben',
    secondName : 'wissem',
    username : 'wiss',
    email : 'xy@zt.sq',
    password : 'wissem',
    confirmPassword : 'wissem'
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]}
      ]
    });
    backEnd = new MockBackend();
  });
  beforeEach(inject([SignUpService] , (signupService : SignUpService)=>{
    subject = signupService;
  }));

  it('addUser method should be defined', () => {
      expect(subject.addUser()).toBeDefined();
  });

  it('handlError method should be defined', () => {
    expect(subject.handleError).toBeDefined();
  });

  it('extractResponseData method should be defined', ()=> {
    expect(subject.extractResponseData).toBeDefined();
  });

  it('should url contains http://localhost:5000  ',() => {
    expect(subject.url).toContain('http://localhost:5000')
  });

  it('addUser should call end point and return it\'s result',() => {
      backEnd.connections.subscribe((connection  : MockConnection ) => {
        let options = new ResponseOptions({
          body : JSON.stringify({success : true})
        });
        connection.mockRespond(new Response(options));
      });
      subject.addUser(user)
        .subscribe((response) => {
        expect(response.json()).toEqual({success : true});
        })
  });

})
