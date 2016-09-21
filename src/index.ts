import { Component, Host }  from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'ac-form-errors',
  inputs: [
    'controlPath: control',
    'errorTypes: errors'
  ],
  template: `
    <span *ngFor="let error of errorMessages">
      <span>{{ error.message }}</span>
    </span>
  `
})
export class AcFormErrors {
  controlPath: string;
  errorTypes: {[key: string]: any};


  constructor(@Host() public formDir: NgForm) {

  }

  get errorMessages(): Array<{type: string, message: string}> {
    var form: FormGroup = this.formDir.form;
    var control = form.get(this.controlPath);
    var _errors = [];
    if (control !== undefined && control !== null  && control.touched) {
      let errors = Object.keys(this.errorTypes);
      for (let i = 0; i < errors.length; ++i) {
        let errorType = errors[i];
        if (control.hasError(errorType)) {
          _errors.push({
            type: errorType,
            message: this.errorTypes[errorType]
          });
        }
      }
    }
    return _errors;
  }
  set errorMessages(value) {
  }

}


export const ANGULARCLASS_FORM_ERRORS_DIRECTIVES = [
  AcFormErrors
];
