import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 
import { Observable, BehaviorSubject, tap, throwError } from 'rxjs';
import { ILogin, IUserResponse } from '../models/auth.models'; 
import { PathRest } from '../../commons/static/path-api'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  authSubject = new BehaviorSubject(false);

  private token!: string;

  constructor(private httpClient: HttpClient) {} 

  login(user: ILogin): Observable<IUserResponse> {
    return this.httpClient
      .post<IUserResponse>(PathRest.POST_LOGIN, user)
      .pipe(
        tap((res: IUserResponse) => {
          if (res) {
            // saveToken
            this.saveToken(res.token);
            
          }
        }) 
      );
  }

  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
  }

  private saveToken(token: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    this.token = token;
  }

  isLoggedIn(): boolean {
    // return true if the user has token
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }

   
}
