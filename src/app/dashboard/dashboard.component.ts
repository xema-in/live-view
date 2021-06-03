import { Component, OnInit } from '@angular/core';
import { ServerConnection } from 'jema';
import { BackendService } from '../_shared/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  serverConnection: ServerConnection;

  constructor(private service: BackendService) {
    this.serverConnection = service.getServerConnection();
  }

  ngOnInit(): void {
  }

}
