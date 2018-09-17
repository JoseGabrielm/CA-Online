import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as api from '../../api/api.module';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();

  doLogin(login: Login): Observable<Login> {

    return this.http.post<Login>(api.API_BASE_URL + 'login', login);
  }

  // logout()  : Observable<any> {
  //   return this.http.post<any>(api.API_BASE_URL + 'auth/logout','');
  // }

  logout() : Observable<string> {

    return this.http.post<string>(api.API_BASE_URL + 'logout', null);
  }
  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token) { //essa atribuição é feita para atualizar a variavel e o resto do sistema ser notificado
      this._loggedIn.next(true);
    } else {
      this._loggedIn.next(false);
    }

    return this._loggedIn.getValue();
  }
}
