/**
 * Created by wissem on 2/26/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Login_1 = require("./Login");
var LoginComponent = (function () {
    function LoginComponent() {
        this.pageTitle = "Login";
        this.user = new Login_1.Login();
    }
    LoginComponent.prototype.login = function (loginSave) {
        console.log(loginSave);
    };
    LoginComponent = __decorate([
        core_1.Component({
            //moduleId : module.id,
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
