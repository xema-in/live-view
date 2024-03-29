import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BackendService } from './_shared/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: BackendService, private router: Router, private title: Title) {
    this.title.setTitle('Live View');
    this.service.appState.subscribe((state) => {
      this.title.setTitle('Live View: ' + state.state);
      switch (state.state) {

        case 'Unknown': {
          this.router.navigateByUrl('/server');
          break;
        }

        case 'ServerFound': {
          this.router.navigateByUrl('/login');
          break;
        }

        case 'LoggedIn': {
          this.router.navigateByUrl('/connect');
          break;
        }

        case 'RemoteLogout': {
          this.router.navigateByUrl('/reconnect/true');
          break;
        }

        case 'Connected': {
          this.monitorConnection();
          this.router.navigateByUrl('/dashboard');
          break;
        }

        default: {
          console.log('Unhandled App State: ' + state.state);
          break;
        }
      }
    });
  }

  monitorConnection(): void {

    const conn = this.service.getServerConnection();

    conn.connectionState.subscribe((connectionState) => {

      if (connectionState.connected === false) {

        switch (connectionState.state) {

          case 'Logout': {
            this.service.setAppState({ state: 'Unknown', connected: false });
            break;
          }

          case 'RemoteLogout': {
            Swal.fire({
              icon: 'info',
              title: 'Remote Logout',
              text: 'Your session is terminated!'
            }).then(() => {
              this.service.setAppState({ state: 'RemoteLogout', connected: false });
            });
            break;
          }

          case 'Disconnected': {
            Swal.fire({ icon: 'error', title: 'Disconnected!', text: 'Connection to the Server disconnected.' });
            break;
          }

        }

      }

    });

    // conn.logger.subscribe((entry) => {
    //   console.log(entry.context, entry.message);
    // });

  }

}
