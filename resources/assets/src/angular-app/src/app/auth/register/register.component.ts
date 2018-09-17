import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Cidade, CityService, Estado } from '../../Tools/city.service';
import { Register, RegisterService } from '../services/register.service';
import { HttpErrorResponse } from '@angular/common/http';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;


  cidades: Observable<Cidade[]>;
  currentEstadoID: string ;
  estados: Observable<Estado[]>;
  matcher = new MyErrorStateMatcher();
  errors:Array<string>;
  done:Array<string>;
  constructor(private cityService: CityService,
    private registerService: RegisterService) { }


  ngOnInit() {
    this.currentEstadoID = '2';
    this.estados = this.cityService.getEstados();
    this.cidades = this.cityService.getCidades();

    this.registerForm = new FormGroup({
      'name' : new FormControl('vitor', [Validators.required]),
      'email': new FormControl('vitor@vitor.com', [
        Validators.required,
        Validators.email,
      ]),
      'passGroup': new FormGroup({
        'password': new FormControl('123456789', [
          Validators.required
        ]),
        'confirmPassword': new FormControl('123456789', [
          Validators.required,
        ])
      }, [this.MatchPassword]),
      'estado': new FormControl('2', [Validators.required]),
      'cidade': new FormControl('3', [Validators.required]),
      'data': new FormControl('10-10-2000', [
        Validators.required
      ]),
    });

    this.onChanges();
  }
  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('passGroup.password'); }
  get confirmPassword() { return this.registerForm.get('passGroup.confirmPassword'); }
  get estado() { return this.registerForm.get('estado'); }
  get cidade() { return this.registerForm.get('cidade'); }
  get data() { return this.registerForm.get('data'); }
get name()  { return this.registerForm.get('name');}

  MatchPassword(AC: FormGroup): ValidatorFn {

    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag

    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });

    } else {

      return null
    }
  }

  onSubmit() {
    let registerParams: Register = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      data_nascimento: this.data.value,
      id_cidade: this.cidade.value,
      id_estado: this.estado.value
    }
    this.registerService.doRegister(registerParams).subscribe(
      res => { 
        this.done=Object.values( res);

      },
      errors => {
        console.log(errors.error);
        this.errors=Object.values( errors.error);
  
       }
    );
  }

  onChanges() {
    this.estado.valueChanges.subscribe(val => {
      this.currentEstadoID = val;
    })
  }
}
