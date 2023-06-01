import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000';

  getClaims(): Observable<any> {
    return this.http.get(`${this.baseUrl}/claims`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`)
  }
  getProviders(): Observable<any>{
    return this.http.get(`${this.baseUrl}/providers`)
  }
  getMembers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/members`)
  }
}
