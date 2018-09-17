import { Component, OnInit } from '@angular/core';
import { UserService, UserModel } from '../api/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:UserModel;
  ngOnInit() {
    this.userService.getUser().subscribe(

      data=> this.user=data
    );
  }

}
