// auth.service.ts

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {User} from "../interface/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/authController/loginUser";
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  loginUser(loginRequest: { email: string; password: string }): Observable<User> {
    return this.http.post<User>(this.url, loginRequest).pipe(
      tap((user) => {
        this.currentUserSubject.next(user);
      })
    );
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  logoutUser(): void {
    // Backend'e logout talebini göndermek için gerekli kodu ekleyebilirsiniz.
    // Ardından, aşağıdaki satırı kullanarak currentUser'ı güncelleyin.
    this.currentUserSubject.next(null);
  }
}

