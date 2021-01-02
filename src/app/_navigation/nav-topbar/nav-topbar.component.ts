import { Component, OnInit, Input } from "@angular/core";
import { BackendService } from "../../_shared/backend.service";
import { Router } from "@angular/router";
import { ServerConnection } from "jema";

@Component({
  selector: "app-nav-topbar",
  templateUrl: "./nav-topbar.component.html",
  styleUrls: ["./nav-topbar.component.css"],
})
export class NavTopbarComponent implements OnInit {
  bus: ServerConnection;
  phoneState: any;
  breakState: any;
  info: any;

  constructor(
    private service: BackendService,
    private router: Router,
  ) {
    this.bus = service.getServerConnection();
  }

  ngOnInit() {
    this.bus.phoneState.subscribe((state) => {
      this.phoneState = state;
    });

    this.bus.breakState.subscribe((state) => {
      this.breakState = state;
    });

    this.bus.agentInfo.subscribe((res) => {
      this.info = res;
    });
  }

  Logoff() {
    // this.bus.logout().subscribe(
    //   data => {
    //     this.service.setAppState({ state: 'Unknown' });
    //     localStorage.removeItem('access_token');
    //     this.router.navigateByUrl('/login');
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // );

    this.service.setAppState({ state: "Unknown" });
    localStorage.removeItem("access_token");
    this.router.navigateByUrl("/login");
  }

  askBreak() {
  }

  cancelBreak() {
    this.bus.cancelBreak();
  }

  exitBreak() {
    this.bus.exitBreak();
  }
}
