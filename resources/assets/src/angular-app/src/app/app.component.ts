import { Component } from '@angular/core';
import { LoginService } from './auth/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C.A ONLINE';

  constructor(private loginService:LoginService) { 
    
  }

  ngOnInit(){
    this.loginService.isLoggedIn();
    
  }

  
}
