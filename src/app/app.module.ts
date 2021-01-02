import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialComponentsModule } from './app-material.module';
import { AppComponent } from './app.component';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { LoginLayoutComponent } from './_layout/login-layout/login-layout.component';
import { NavTopbarComponent } from './_navigation/nav-topbar/nav-topbar.component';

import { ServerSelectionComponent } from './auth/server-selection/server-selection.component';
import { LoginComponent } from './auth/login/login.component';
import { PhoneSelectionComponent } from './auth/phone-selection/phone-selection.component';
import { ConnectComponent } from './auth/connect/connect.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QueueMonitorPanelModule } from '@xema/queue-monitor-panel';
import { TeamMonitorPanelModule } from '@xema/team-monitor-panel';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginLayoutComponent,
    NavTopbarComponent,
    DashboardComponent,
    ServerSelectionComponent,
    LoginComponent,
    PhoneSelectionComponent,
    ConnectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialComponentsModule,
    QueueMonitorPanelModule,
    TeamMonitorPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
