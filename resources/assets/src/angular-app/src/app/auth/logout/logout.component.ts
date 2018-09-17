import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {map, finalize} from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private loginService: LoginService) { }
  loginObs:Subscription;
  logoutMsg='';
  ngOnInit() {
    this.loginObs = this.loginService.logout()
    .pipe(finalize(() => {
        localStorage.removeItem('token');
        
        this.loginService.isLoggedIn();
    } )).
  
    subscribe(

      data => {
        console.log('logout ok');
        this.logoutMsg = data['message'];
  //      localStorage.removeItem('token'); 
 //       this.loginService.isLoggedIn();

        },
      errors => {
        this.logoutMsg = errors['error']['message'];
  //      localStorage.removeItem('token');
   //     this.loginService.isLoggedIn();


//        console.error('logout error: ' + errors);
      },
      function(){

      }
      
    );


  }
  ngOnDestroy(){

    this.loginObs.unsubscribe();

  }


}
