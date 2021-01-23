import { FormGroup } from '@angular/forms';

export class GenericValidator{
    constructor(private ValidationMessages: ValidationMessages){}

    processarMensagens(container: FormGroup):{[key:string]:string}{
        let messages = {};
        for(let controlKey in container.controls){
            if(container.controls.hasOwnProperty(controlKey)){
                let c = container.controls[controlKey];

                if(c instanceof FormGroup){
                    let childMessages = this.processarMensagens(c);
                    Object.assign(messages, childMessages);
                }
                else{
                    if(this.ValidationMessages[controlKey]){
                        messages[controlKey] = '';
                        if((c.dirty || c.touched) && c.errors){
                            Object.keys(c.errors).map(messageKey => {
                                if(this.ValidationMessages[controlKey][messageKey]){
                                    messages[controlKey] += this.ValidationMessages[controlKey][messageKey] + '<br />';
                                }
                            });
                        }
                    }
                }
            }
        }
        return messages;
    }
}

export interface DisplayMessage{
    [key: string]: string
}

export interface ValidationMessages{
    [key: string]: { [key: string]: string }
}