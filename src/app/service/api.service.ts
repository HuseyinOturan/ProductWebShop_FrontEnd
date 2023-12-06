import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //properties

  //constructors
  constructor(private http: HttpClient) {}

  //getters & setters

  //HTTP methods

  getAll<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  public patch(url: string, body: any): Observable<any> {
    return this.http.patch(url, body);
  }
}
