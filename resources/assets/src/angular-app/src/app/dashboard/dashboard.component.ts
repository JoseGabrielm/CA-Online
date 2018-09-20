import { Component, OnInit } from '@angular/core';
import { UserService, UserModel } from '../api/services/user.service';
import { Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Router, Event, NavigationEnd, Route, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }
  user: Observable<UserModel>;

  ev: Subscription;
    usersubs:Subscription;
redirect(){
  this.usersubs= this.user.subscribe(
    data => { 
      if(this.router.url=== '/dashboard' ){

        if (data.nivel_acesso == 2)
        this.router.navigate(['dashboard', 'admin']);
        else if (data.nivel_acesso == 1)
        this.router.navigate(['dashboard', 'applicator']);
        
        else {
          this.router.navigate(['dashboard', 'user']);
          
        }
      }
    },
    errors =>{
      console.error(errors);
    }
  );
}
  ngOnInit() {
    this.user = this.userService.getUser();
    this.ev = this.router.events
      .subscribe((e: Event) => {
        if (e instanceof NavigationEnd) {
          let url = e.urlAfterRedirects || e.url;
          if (url === '/dashboard') {


            this.redirect();
          }
        }
      },
      errors =>{
        console.error(errors);
      });



    if(this.user)
    this.redirect();

  }
  OnDestroy(){
    this.usersubs.unsubscribe();
    this.ev.unsubscribe();

  }
}
