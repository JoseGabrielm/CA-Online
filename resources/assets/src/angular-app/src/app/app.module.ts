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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
    EHeaderComponent,
    EHeaderTitleComponent
],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutesModule,
    MaterialModule,
    LoadingBarRouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
