import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Cidade, Estado, CityService } from '../../../Tools/city.service';
import { Observable } from 'rxjs';
import { RegisterService } from '../../../auth/services/register.service';
import { UserService, UserModel } from '../../../api/services/user.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  dadosForm: FormGroup;
  hide = true;
  get email() { return this.dadosForm.get('email'); }

  get id_estado() { return this.dadosForm.get('id_estado'); }
  get id_cidade() { return this.dadosForm.get('id_cidade'); }
  get data_nascimento() { return this.dadosForm.get('data_nascimento'); }
  get name() { return this.dadosForm.get('name'); }
  cidades: Observable<Cidade[]>;
  currentEstadoID: string ;
  estados: Observable<Estado[]>;
  errors:Array<string>;
  user:UserModel;
  done:Array<string>;
  maxDate = new Date();
  matcher = new MyErrorStateMatcher();

  constructor(private cityService: CityService,
    private userService: UserService,
  private snackBar: MatSnackBar) { }


  insertData(){
    this.currentEstadoID = this.user.id_estado;

    this.dadosForm.setValue(
      {
        'name':this.user.name,
        'email':this.user.email,
        'id_cidade': (this.user.id_cidade).toString(),
        'id_estado':(this.user.id_estado).toString(),
        'data_nascimento': this.user.data_nascimento
      });
  }
  ngOnInit() {
    this.currentEstadoID = '2';
    this.estados = this.cityService.getEstados();
    this.cidades = this.cityService.getCidades();
    this.dadosForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),



      'id_estado': new FormControl('', [Validators.required]),
      'id_cidade': new FormControl('', [Validators.required]),
      'data_nascimento': new FormControl('', [
        Validators.required
      ]),
    });
     this.userService.getUser().subscribe(
      done => {
        this.user = done;
        this.insertData();
      }
    )
    
    this.onChanges();

  }
  onChanges(){
    this.id_estado.valueChanges.subscribe(val => {
      this.currentEstadoID = val;
    })
  }
  onSubmit(){
    let snackBarRef = this.snackBar.open('Os dados foram salvos');
    
  }
}
