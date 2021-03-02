import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './auth/connect/connect.component';
import { LoginComponent } from './auth/login/login.component';
import { ServerSelectionComponent } from './auth/server-selection/server-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';


const routes: Routes = [

  // login, forgot password pages
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'server', component: ServerSelectionComponent },
      { path: 'login', component: LoginComponent },
      { path: 'connect', component: ConnectComponent },
      { path: 'forgot', component: LoginComponent },
      { path: 'reconnect/:reconnect', component: ConnectComponent },
    ]
  },

  // application pages
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
