import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HistoricoService, historicoIn } from '../services/historico.service';
import { Observable } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements AfterViewInit {

  constructor(private hService: HistoricoService) { }
  historicoData: Observable<historicoIn[]>= this.hService.get();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['vacina', 'aplicador', 'posto', 'created_at'];
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
 
    this.historicoData.pipe(

    ).subscribe(
      data =>  {   
        
        this.dataSource.data =data 
        this.dataSource.sort = this.sort;
        
      }
    )

  }


}
