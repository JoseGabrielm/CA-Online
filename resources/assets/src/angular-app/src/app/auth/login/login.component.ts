import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../services/login.service'
import { Login } from '../services/login'

import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService
import { Router } from '@angular/router';
import { Observable, timer, interval, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
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

    tt : Observable<number>;
    hide = true;
    loginForm: FormGroup;
    LoginData: Login;
    error: string;
    formSubmitError: string;
    constructor(private service: LoginService,
        private ngxService: NgxUiLoaderService,
        private router:Router) {
    }
    logSub : Subscription;
    ngOnInit(): void {
        
        this.formSubmitError = "";
        this.LoginData = {
            email: '',
            password: ''
        };
        this.loginForm = new FormGroup({

            'email': new FormControl('user@gmail.com', [
                Validators.required,
                Validators.email,
            ]),
            'password': new FormControl('user', [
                Validators.required
            ]),
        });
    }
    get email() { return this.loginForm.get('email'); }

    get password() { return this.loginForm.get('password'); }


    matcher = new MyErrorStateMatcher();

    loginSucessful() {

    }
    loginUnauthorized() {
        this.formSubmitError = "Email ou senha incorretos";
    }
    onDestroy(){
        console.log('destroy);')
    }
    onSubmit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        this.LoginData = {
            email: this.email.value,
            password: this.password.value
        };
        this.service.doLogin(this.LoginData).subscribe(
            data => {
                console.log(data);
                localStorage.setItem('token', data['token']);

                this.service.isLoggedIn();
                                // 1 hour
                this.logSub= timer(1000*60*60).subscribe(
                    data => {
                        this.service.logout()
                        .subscribe( x => {
                            // console.log('tokken removed');
                            localStorage.removeItem('token');
                            this.service.isLoggedIn();
                            this.logSub.unsubscribe();
                            this.router.navigate(['/session-end']);


                        });
                    }                   
                );
                this.router.navigate(['/dashboard']);

            },
            error => {
                this.error = error;
                switch (error.status) {
                    case 401:
                        this.loginUnauthorized();
                        break;

                    default:
                        break;
                }
            }
        );

        this.ngxService.stop();

        // TODO: Use EventEmitter with form value

    }
}
