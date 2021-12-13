import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide = true;
  form: any = {
    email: null,
    password: null
  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/view-stock']);
    }
  }

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 5000,
    });
  }

  login() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/view-stock']).then(
            () => {
              window.location.reload();
            }
          )
          this.openSnackBar("Logged In Successfully.");
        },
        err => {
          console.log(err);
          this.openSnackBar("An Error Occurred While Logging In.")
        }
      )
  }

}
