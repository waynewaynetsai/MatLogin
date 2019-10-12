import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable()
export class FormService {
  loginForm: FormGroup = this.fb.group({
    account: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['',
      [
        Validators.required
      ]
    ]
  });
  constructor(private fb: FormBuilder) { }
  mockLogin() {
    const response = Math.random() >= 0.5;
    return of(response).pipe(
      delay(3000)
    );
  }
}
