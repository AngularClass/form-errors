# AngularClass Form Errors
Angular 2 Form Errors
# Install
```bash
npm install @angularclass/form-errors --save
```

* Inputs
  * `[errors]`: takes an object where the keys match the errors and the value is the message
* Attributes
  * `control`: The control name to determine the errors

# API
```typescript
bootstrap(App, [
  ...ANGULARCLASS_FORM_ERRORS_DIRECTIVES // [ AcFormErrors ]
]);
```
```html
<ac-form-errors control="username" [errors]="{'required': 'this is required'}"></ac-form-errors>
```


# example
```typescript
import { Component }  from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';


import {ANGULARCLASS_FORM_ERRORS_DIRECTIVES} from '@angularclass/form-errors';



@Component({
  selector: 'account-edit',
  providers: [
    ...FORM_PROVIDERS
  ],
  directives: [
    ...FORM_DIRECTIVES,
    ...ANGULARCLASS_FORM_ERRORS_DIRECTIVES
  ],
  template: `
  <div>
    <p>
      Account:
    </p>

    <form
      #accountForm="ngForm"
      (ngSubmit)="onUpdateProfile(accountForm.value, accountForm.valid)"
    >

      <div>
        <label>
          Username:
          <input ngControl="username" required>
        </label>
        
        <ac-form-errors control="username" [errors]="{'required': 'username is required'}"></ac-form-errors>
        
      </div>


      <button>Submit</button>

    </form>

  </div>
  `
})
export class AccountEditComponent {
  accountForm = {
    username: ''
  };

  onUpdateProfile(json, isValid) {

  }

}
```

### todo
- [ ] use ng-content
- [ ] by default use the control next to the directive

___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com
