import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.module';


export interface UserModel{
  id,
  name,
  email,
  password,
  cpf,
  nivel_acesso,
  data_nascimento,
  id_cidade,
  id_estado,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser() : Observable<UserModel>{
    return this.http.get<UserModel>(API_BASE_URL+'user');
  }
}
