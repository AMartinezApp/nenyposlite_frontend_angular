import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, tap, throwError } from 'rxjs';
import { LoginI, RoleI, UserI, UserResponseI } from '../models/auth.models';
import { PathRest } from '../../commons/static/path-api';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loggedIn.next(this.isLoggedIn());
  }
   

  login(user: LoginI): Observable<UserResponseI> {
    return this.httpClient.post<UserResponseI>(PathRest.POST_LOGIN, user).pipe(
      tap((res: UserResponseI) => {
        if (res) {
          this.loggedIn.next(true);
          this.saveToken(res.token);
        }
      })
    );
  }
  getAll(): Observable<UserI[]> {
    return this.httpClient.get<UserI[]>(PathRest.GET_LOGIN);
  }

  getAllRole(): Observable<RoleI[]> {
    return this.httpClient.get<RoleI[]>(PathRest.USER_ROL);
  }

  onSave(user: UserI) {
    return this.httpClient.post<UserI>(PathRest.REGISTER_USER, user);
  }

  onUpdate(user: UserI) {
    return this.httpClient.put<UserI>(`${PathRest.GET_LOGIN}/${user.id}`, user);
  }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
    this.loggedIn.next(false);
  }

  private saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
