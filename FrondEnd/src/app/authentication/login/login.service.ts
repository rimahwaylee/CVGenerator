/**
 * Created by wissem on 2/26/17.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Login} from "./Login";

@Injectable()
export class LoginService {
  constructor(private http : Http){}
  user : Login;
  login (user){

  }
}
