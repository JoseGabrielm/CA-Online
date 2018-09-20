import { Component, OnInit } from '@angular/core';
import { HistoricoService, historicoIn } from '../historico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor(private hService:HistoricoService) { }
  historicoData : Observable<historicoIn>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.historicoData=this.hService.get();
  }

}
