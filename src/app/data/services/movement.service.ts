import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movement } from '../types/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiUrl = 'http://localhost:8080/api'; // URL to web api

  constructor(private http: HttpClient) {}

  getMovements(movement: Movement): Observable<Movement[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
        .set('accountancyKey', movement.accountancyKey)
        .set('groupType', movement.groupType)
        .set('groupKey', movement.groupKey)
        .set('categoryKey', movement.categoryKey)
        .set('monthOrdinal', this.getDateMonth(movement.date))
        .set('year', '2022')
    };
    const url = `${this.apiUrl}/accountancy/${movement.accountancyKey}/movements/`;
    return this.http.get<Movement[]>(url, httpOptions);
  }

  add(movement: Movement): Observable<Movement> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Movement>(
      `${this.apiUrl}/accountancy/${movement.accountancyKey}/movements/`,
      movement,
      httpOptions
    );
  }

  private getDateMonth(dateString: string) {
    const d = dateString.split('-');
    const date = new Date(d[0] + '/' + d[1] + '/' + d[2]);
    return date.getMonth() + 1;
  }
}
