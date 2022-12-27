import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginFormData } from '../components/common/log-in/log-in-form-data';
import { AuthSession } from './auth-session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApiUrl = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}

  signIn(login: LoginFormData): Observable<AuthSession> {
    const url = `${this.authApiUrl}/auth/login`;
    return this.http.post<AuthSession>(url, login).pipe(
      tap((auth: AuthSession) => {
        sessionStorage.setItem('access_token', auth.token);
        sessionStorage.setItem('expires_at', auth.expiresAt);
        this.router.navigate(['/']);
      })
    );
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = sessionStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    const removeToken = sessionStorage.removeItem('access_token');
    if (removeToken == null) {
      sessionStorage.removeItem('expires_at');
      this.router.navigate(['login']);
    }
  }
}
