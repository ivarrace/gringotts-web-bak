import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/data/types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private groupApiUrl = 'http://localhost:8080/api/accountancy'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getCategories(
    accountancyKey: string,
    groupType: string,
    groupKey: string
  ): Observable<Category[]> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}/categories/`;
    return this.http.get<Category[]>(url);
  }

  getCategory(
    accountancyKey: string,
    groupType: string,
    groupKey: string,
    categoryKey: string
  ): Observable<Category> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}/categories/${categoryKey}`;
    return this.http.get<Category>(url);
  }

  add(
    accountancyKey: string,
    groupType: string,
    groupKey: string,
    category: Category
  ): Observable<Category> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}/categories/`;
    return this.http.post<Category>(url, category, this.httpOptions);
  }

  delete(
    accountancyKey: string,
    groupType: string,
    groupKey: string,
    categoryKey: string
  ): Observable<Category> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}/categories/${categoryKey}`;
    return this.http.delete<Category>(url, this.httpOptions);
  }

  update(
    accountancyKey: string,
    groupType: string,
    groupKey: string,
    categoryKey: string,
    category: Category
  ): Observable<any> {
    const url = `${this.groupApiUrl}/${accountancyKey}/${groupType}/${groupKey}/categories/${categoryKey}`;
    return this.http.put(url, category, this.httpOptions);
  }
}
