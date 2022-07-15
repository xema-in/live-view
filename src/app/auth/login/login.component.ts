import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/_shared/backend.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagerEnvironment } from 'src/app/_code/manager-environment';
import { Authenticator, ServerConnection } from 'jema';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  manager!: string;
  isLoading = false;
  disable = false;

  constructor(private service: BackendService) {
  }

  ngOnInit() {
    this.manager = ManagerEnvironment.getBackendUrl();
    if (!environment.production) console.info(this.manager);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  submit() {
    this.isLoading = true;
    this.disable = true;

    const auth = new Authenticator(ManagerEnvironment.getBackendUrl());
    auth.getAuthToken({
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? '',
    }).subscribe(
      (data: any) => {
        this.isLoading = false;
        this.disable = false;
        this.service.saveToken(data.auth_token);
        this.service.setAppState({ state: 'LoggedIn', connected: false });
      },
      err => {
        this.isLoading = false;
        this.disable = false;
        if (err.response !== undefined) { err = err.response; }
        if (err.status === 401) {

          Swal.fire({
            icon: 'error',
            title: 'Authentication failed!',
            text: 'It seems you haven\'t entered valid credentials. Check your User Name and Password!'
          });

        } else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message
          });

        }
      }
    );

  }

}
