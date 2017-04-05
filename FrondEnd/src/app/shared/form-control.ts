/**
  * Created by wissem on 3/27/17.
 */
import {FormGroup, AbstractControl} from "@angular/forms";


export class FormValidator {

  constructor(private validationErrorMessages : {[key: string]: {[key : string]: string}}){}

  processMessages(container : FormGroup) : {[key : string]: string}{

    let messages = {};

    for(let controlKey in container.controls){
      if(container.controls.hasOwnProperty(controlKey)){
        let c = container.controls[controlKey];

        if(c instanceof FormGroup){
          let childMessages = this.processMessages(c);
          Object.assign(messages, childMessages);
        }else {

          if(this.validationErrorMessages[controlKey]){
            messages[controlKey]='';
            if((c.dirty || c.touched) && c.errors){
              Object.keys(c.errors).filter(Boolean).map(messageKey =>{
                if(this.validationErrorMessages[controlKey][messageKey]){
                  messages[controlKey] += this.validationErrorMessages[controlKey][messageKey] + ' '
                }
              })
            }
          }
        }
      }
    }
    return messages;
  }
}
