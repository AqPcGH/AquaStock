import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://aquapacproductmanagement-env.eba-vhkrpxqq.us-east-2.elasticbeanstalk.com/api';
  // private URL = 'http://localhost:4000/api'
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/signup', user, {headers});
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.URL + '/signin', {
      email,
      password
    }, {headers});
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then(
      () => {
      window.location.reload();
      }
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

}