import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../../auth/login/login.component'
import { RegisterComponent} from '../../auth/register/register.component'
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../home/home.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register',        component: RegisterComponent },
    { path: 'home',        component: HomeComponent },


    { path: '',   redirectTo: '/home', pathMatch: 'full' }
  ];
   
@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MainRoutesModule { }