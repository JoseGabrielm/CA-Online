import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../api/api.module';
import {PostoIn} from '../../../api/services/posto.service'
import {VacinaIn} from '../../../api/services/vacina.service'
import {AplicadorIn} from '../../../api/services/aplicador.service'
export interface historicoIn{
   aplicador:AplicadorIn,
   vacina:VacinaIn,
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
