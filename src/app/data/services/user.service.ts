import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../types/user';
import { RegisterFormData } from 'src/app/components/common/register/register-form-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersApiUrl = 'http://localhost:8080/api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  registerUser(RegisterFormData: RegisterFormData): Observable<User> {
    const url = `${this.usersApiUrl}/register`;
    return this.http.post<User>(url, RegisterFormData);
  }
}
