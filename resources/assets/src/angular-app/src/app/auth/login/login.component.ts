import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({

      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required
      ]),
    });
  }
  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }


  matcher = new MyErrorStateMatcher();

  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.warn(this.email.value);
    console.warn(this.password.value);
  }
}
