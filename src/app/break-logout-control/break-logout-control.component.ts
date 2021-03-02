import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnection } from 'jema';
import { BackendService } from '../_shared/backend.service';

@Component({
  selector: 'app-break-logout-control',
  templateUrl: './break-logout-control.component.html',
  styleUrls: ['./break-logout-control.component.css']
})
export class BreakLogoutControlComponent implements OnInit {

  bus: ServerConnection;
  info: any;

  constructor(private service: BackendService, private router: Router) {
    this.bus = service.getServerConnection();
  }

  ngOnInit(): void {
    this.bus.info.subscribe((info) => {
      this.info = info;
    });
  }

  logoff() {
    this.service.disconnect();
  }

}
