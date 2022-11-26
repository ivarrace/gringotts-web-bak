import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Accountancy } from '../types/accountancy';

@Injectable({
  providedIn: 'root'
})
export class AccountancyService {
  private accountanciesApiUrl = 'http://localhost:8080/api/accountancy'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getAccountancies(): Observable<Accountancy[]> {
    const url = `${this.accountanciesApiUrl}/`;
    return this.http.get<Accountancy[]>(url);
  }

  getAccountancy(key: string): Observable<Accountancy> {
    const url = `${this.accountanciesApiUrl}/${key}`;
    return this.http.get<Accountancy>(url);
  }

  add(accountancy: Accountancy): Observable<Accountancy> {
    return this.http.post<Accountancy>(
      this.accountanciesApiUrl,
      accountancy,
      this.httpOptions
    );
  }

  delete(id: string): Observable<Accountancy> {
    const url = `${this.accountanciesApiUrl}/${id}`;
    return this.http.delete<Accountancy>(url, this.httpOptions);
  }

  update(accountancy: Accountancy): Observable<any> {
    const url = `${this.accountanciesApiUrl}/${accountancy.key}`;
    return this.http.put(url, accountancy, this.httpOptions);
  }

  // TODO search
  searchAccountancies(term: string): Observable<Accountancy[]> {
    if (!term.trim()) {
      // if not search term, return empty Accountancy array.
      return of([]);
    }
    return this.http
      .get<Accountancy[]>(`${this.accountanciesApiUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found Accountancies matching "${term}"`)
            : this.log(`no Accountancies matching "${term}"`)
        ),
        catchError(this.handleError<Accountancy[]>('searchAccountancies', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AccountancyService message with the MessageService */
  private log(message: string) {
    console.log(`AccountancyService: ${message}`);
  }
}
