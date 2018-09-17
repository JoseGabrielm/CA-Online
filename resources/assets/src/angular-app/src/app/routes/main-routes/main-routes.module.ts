import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component'
import { RegisterComponent } from '../../auth/register/register.component'
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../home/home.component'
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { LogoutComponent } from '../../auth/logout/logout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthGuard } from '../../auth/auth.guard';
import { DashboardApplicatorComponent } from '../../dashboard/dashboard-applicator/dashboard-applicator.component';
import { AuthApplicatorGuard } from '../../auth/auth-applicator.guard';
import { AuthAdminGuard } from '../../auth/auth-admin.guard';
import { DashboardAdminComponent } from '../../dashboard/dashboard-admin/dashboard-admin.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'teste', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard-applicator', component: DashboardApplicatorComponent,
    canActivate: [AuthGuard,AuthApplicatorGuard],
  },
  {
    path: 'dashboard-admin', component: DashboardAdminComponent,
    canActivate: [AuthGuard,AuthAdminGuard],
  },
  { path: '', component: HomeComponent },

  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
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
