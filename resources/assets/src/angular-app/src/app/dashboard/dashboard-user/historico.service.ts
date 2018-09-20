import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../api/api.module';

export interface historicoIn{
  id_vacina ,
  id_registro ,
   id_aplicador ,
   created_at  ,
   updated_at  
}

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<historicoIn>(API_BASE_URL + 'historico');
  }
}
