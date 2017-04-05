
/**
 * Created by wissem on 2/26/17.
 */

import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Login} from "./Login";


@Component({
    //moduleId : module.id,
    templateUrl:'login.component.html',
    styleUrls : ['login.component.css']
})
export class LoginComponent{
    pageTitle :string = "Login";

    user : Login = new Login()
    login(loginSave : NgForm){
        console.log(loginSave)
    }


}
