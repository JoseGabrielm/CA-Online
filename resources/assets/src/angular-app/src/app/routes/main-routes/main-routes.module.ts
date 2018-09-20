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
import { GuestGuard } from '../../auth/guest.guard';
import { DashboardUserComponent } from '../../dashboard/dashboard-user/dashboard-user.component';
import { MinhaCarterinhaComponent } from '../../dashboard/dashboard-user/minha-carterinha/minha-carterinha.component';
import { DadosComponent } from '../../dashboard/dashboard-user/dados/dados.component';
import { HistoricoComponent } from '../../dashboard/dashboard-user/historico/historico.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[GuestGuard] },
  { path: 'teste', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate:[GuestGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard', component: DashboardComponent,
    
    canActivate: [AuthGuard],
    children:
    [
      {
        path: 'user', component: DashboardUserComponent,
        children:
        [
          {path: 'minha-carterinha', component: MinhaCarterinhaComponent},
          {path: 'dados', component: DadosComponent},
          {path: 'historico', component:HistoricoComponent}

        ]

      },
      {
        path: 'applicator', component: DashboardApplicatorComponent,
        canActivate: [AuthApplicatorGuard],
      },
      {
        path: 'admin', component: DashboardAdminComponent,
        canActivate: [AuthAdminGuard],
      }
    ]
  },

  { path: 'home', component: HomeComponent },

  { path: '**', component: PageNotFoundComponent },
  { path: '', component:HomeComponent, pathMatch: 'full' }
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
