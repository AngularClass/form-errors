# AngularClass Form Errors
Angular 2 Form Errors

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
import {
  FORM_PROVIDERS,
  FORM_DIRECTIVES,
} from '@angular/common';


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
      (ngSubmit)="onSubmit(accountForm.value, accountForm.valid)"
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
  // Actions
  onUpdateProfile(json, isValid) {

  }

}
```
