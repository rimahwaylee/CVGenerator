///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterLinkStubDirective, RouterOutletStubComponent} from "./testing/router-stubs";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Http} from "@angular/http";
import {SignUpModule} from "./authentication/sign-up/sign-up.module";

describe('AppComponent & AppModule', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports : [SignUpModule]
    }).compileComponents()

  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  it('should create AppComponent',() => {
    expect(component).toBeTruthy();
  });

  tests();

  //################## Tests  #############################

  function tests(){
    let links : RouterLinkStubDirective[];
    let linkDes : DebugElement[];

    beforeEach(() => {
      fixture.detectChanges();
      linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));
      links  = linkDes
        .map( de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective)
    });

    it('should get RouterLinks from tamplate' ,() => {
      const homeLink = links[0].linkParams[0];
      const signupLink = links[1].linkParams[0];
      expect(homeLink).toBe('/home', '1st link should go to home ');
      expect(signupLink).toBe('/signup', '2st link should go to signup ');
    });

    it('should click navigation links in tamplate',() => {
      const homelinkDe = linkDes[0];
      const homeLink = links[0]
      const signupLinkDe = linkDes[1];
      const signupLink = links[1];
      expect(signupLink.navigatedTo).toBeNull('link should not have navigated yet');
      homelinkDe.triggerEventHandler('click',null);
      signupLinkDe.triggerEventHandler('click',null);
      fixture.detectChanges();
      expect(homeLink.navigatedTo[0]).toBe("/home",'when click Home link');
      expect(signupLink.navigatedTo[0]).toBe("/signup", 'When click Signup link');
    });

  }
});
