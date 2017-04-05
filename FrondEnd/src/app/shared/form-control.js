"use strict";
/**
  * Created by wissem on 3/27/17.
 */
var forms_1 = require("@angular/forms");
var FormValidatorService = (function () {
    function FormValidatorService(validationErrorMessages) {
        this.validationErrorMessages = validationErrorMessages;
    }
    FormValidatorService.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                if (c instanceof forms_1.FormGroup) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    if (this_1.validationErrorMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationErrorMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationErrorMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    FormValidatorService.prototype.passwordValidator = function (c) {
        var passwdControl = c.get('password');
        var confirmPasswdControl = c.get('confirmPassword');
        if (confirmPasswdControl.pristine || passwdControl.pristine) {
            return null;
        }
        if (passwdControl.value === confirmPasswdControl.value) {
            return null;
        }
        return { 'match': true };
    };
    return FormValidatorService;
}());
exports.FormValidatorService = FormValidatorService;
