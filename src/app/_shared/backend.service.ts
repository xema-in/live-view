import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ServerConnection } from 'jema';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private serverConnection: ServerConnection | undefined;
  public appState = new BehaviorSubject<any>({ state: 'Unknown' });

  constructor() {
  }

  setAppState(state: any): void {
    this.appState.next(state);
  }

  getToken(): string {
    let token = localStorage.getItem('access_token');
    if (token == null) token = '';
    return token;
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getBackendUrl(): string {
    if (environment.backend !== '') {
      return environment.backend;
    } else {
      let backend = localStorage.getItem('backend');
      if (backend == null) backend = '';
      return backend;
    }
  }

  saveBackendIpAddress(ip: string) {
    localStorage.setItem('backend', ip);
  }

  getServerConnection(): ServerConnection {
    if (this.serverConnection == undefined) throw new Error('Server is not connected');
    return this.serverConnection;
  }

  setupServerConnection() {
    this.serverConnection = new ServerConnection(this.getBackendUrl(), this.getToken());
  }

  connect() {
    if (this.serverConnection == undefined) throw new Error('Server is not setup');
    this.serverConnection.connect();
  }

}
