import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CA Online';
   menuRoutes = [
       {name:'Login', route:'/login'},
       {name:'Registrar', route:'/register'},
       {name:'Sobre', route:'/register'},
    ];

  constructor() { 

    var a = 1;
  }

  
}
