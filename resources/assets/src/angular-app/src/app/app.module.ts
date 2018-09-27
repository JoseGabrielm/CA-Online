import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainRoutesModule } from  './routes/main-routes/main-routes.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component'

import { MaterialModule } from './material/material.module'
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FlexLayoutModule} from "@angular/flex-layout";

import { EHeaderComponent } from './design/e-header/e-header.component';
import { EHeaderTitleComponent } from './design/e-header/e-header-title/e-header-title.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { CityPipe } from './Tools/city.pipe';
import { InterceptorModule } from './api/interceptor/interceptor.module';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardApplicatorComponent } from './dashboard/dashboard-applicator/dashboard-applicator.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { MinhaCarterinhaComponent } from './dashboard/dashboard-user/minha-carterinha/minha-carterinha.component';
import { HistoricoComponent } from './dashboard/dashboard-user/historico/historico.component';
import { DadosComponent } from './dashboard/dashboard-user/dados/dados.component';
import { SessionEndComponent } from './auth/session-end/session-end.component';
import { VacinaApplyComponent } from './dashboard/dashboard-applicator/vacina-apply/vacina-apply.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '../../node_modules/@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
    EHeaderComponent,
    EHeaderTitleComponent,
    PageNotFoundComponent,
    CityPipe,
    LogoutComponent,
    DashboardComponent,
    DashboardAdminComponent,
    DashboardApplicatorComponent,
    DashboardUserComponent,
    MinhaCarterinhaComponent,
    HistoricoComponent,
    DadosComponent,
    SessionEndComponent,
    VacinaApplyComponent,
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainRoutesModule,
    MaterialModule,
    LoadingBarRouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    InterceptorModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
