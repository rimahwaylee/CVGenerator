import {Injectable} from "@angular/core";
import {Customer} from "./customer";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()

export  class SignUpService{
  constructor( private http : Http){}

  url : string = "http://localhost:5000/user/signup";
  addUser (user : Customer){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url,user,options)
      .map(this.extractResponseData)
      .do(data => console.log('Add user : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');}

  private extractResponseData(response: Response){
    let body = response.json();
    console.log(body.message);
    return body.data || {};
  }


}
