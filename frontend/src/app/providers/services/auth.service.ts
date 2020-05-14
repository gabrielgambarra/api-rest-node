import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { ENDPOINTS } from '../../constants';
import { Signup } from '../models/signup.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + ENDPOINTS.AUTH;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // To start heroku server
  public ping(): Observable<any> {
    return this.http.get(`${environment.apiUrl}ping`);
  }

  public login(login: Login): Observable<HttpResponse<any>> {
    return this.http.post(`${this.authUrl}login`, login, { observe: 'response' });
  }

  public signup(signup: Signup): Observable<any> {
    return this.http.post(`${this.authUrl}register`, signup);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }
}
