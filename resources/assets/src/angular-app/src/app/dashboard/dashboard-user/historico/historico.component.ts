import { Component, OnInit } from '@angular/core';
import { HistoricoService, historicoIn } from '../services/historico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor(private hService:HistoricoService) { }
  historicoData : Observable<historicoIn>;
  displayedColumns: string[] = ['vacina', 'aplicador', 'posto', 'created_at'];

  ngOnInit() {
    this.historicoData=this.hService.get();
  }

}
