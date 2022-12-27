import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../types/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupApiUrl = 'http://localhost:8080/api/accountancy'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getGroups(accountancyKey: string, groupType: string): Observable<Group[]> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/`;
    return this.http.get<Group[]>(url);
  }

  getGroup(
    accountancyKey: string,
    groupType: string,
    groupKey: string
  ): Observable<Group> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}`;
    return this.http.get<Group>(url);
  }

  add(
    accountancyKey: string,
    groupType: string,
    group: Group
  ): Observable<Group> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/`;
    return this.http.post<Group>(url, group, this.httpOptions);
  }

  delete(
    accountancyKey: string,
    groupType: string,
    groupKey: string
  ): Observable<Group> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}`;
    return this.http.delete<Group>(url, this.httpOptions);
  }

  update(
    accountancyKey: string,
    groupType: string,
    groupKey: string,
    group: Group
  ): Observable<any> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}`;
    return this.http.put(url, group, this.httpOptions);
  }
}
