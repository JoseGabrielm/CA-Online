import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-e-header',
  templateUrl: './e-header.component.html',
  styleUrls: ['./e-header.component.css']
})
export class EHeaderComponent implements OnInit {
  @Input() title: string;   
  @Input() contents: Array<string>;
  constructor() { 

    

   }

  ngOnInit() {
  }

}
