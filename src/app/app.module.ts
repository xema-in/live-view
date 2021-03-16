import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialComponentsModule } from './app-material.module';
import { AppComponent } from './app.component';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

import { ServerSelectionComponent } from './auth/server-selection/server-selection.component';
import { LoginComponent } from './auth/login/login.component';
import { ConnectComponent } from './auth/connect/connect.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { TimeagoModule, TimeagoFormatter, TimeagoClock } from 'ngx-timeago';
import { CustomClock } from './_code/custom-clock';
import { CustomFormatter } from './_code/custom-formatter';

import { BreakLogoutControlComponent } from './break-logout-control/break-logout-control.component';
import { QueueMonitorPanelModule } from '@xema/queue-monitor-panel';
import { QueueMonitorTablePanelModule } from '@xema/queue-monitor-table-panel';
import { TeamMonitorTablePanelModule } from '@xema/team-monitor-table-panel';
import { DialerMonitorTablePanelModule } from '@xema/dialer-monitor-table-panel';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginLayoutComponent,
    DashboardComponent,
    ServerSelectionComponent,
    LoginComponent,
    ConnectComponent,
    BreakLogoutControlComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppMaterialComponentsModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CustomFormatter },
      clock: { provide: TimeagoClock, useClass: CustomClock },
    }),
    QueueMonitorPanelModule,
    QueueMonitorTablePanelModule,
    DialerMonitorTablePanelModule,
    TeamMonitorTablePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
