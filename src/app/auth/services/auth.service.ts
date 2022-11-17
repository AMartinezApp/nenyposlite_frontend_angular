import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILogin, IUserResponse } from '../models/auth.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string = environment.API_URL;
  authSubject = new BehaviorSubject(false);

  private token!: string;

  constructor(private httpClient: HttpClient) {}

  // register(user: UserI): Observable<JwtResponseI> {
  //   return this.httpClient
  //     .post<JwtResponseI>(`${this.AUTH_SERVER}/auth/register`, user)
  //     .pipe(
  //       tap((res: JwtResponseI) => {
  //         if (res) {
  //           // saveToken
  //           this.saveToken(res.token);
  //         }
  //       })
  //     );
  // }

  login(user: ILogin): Observable<IUserResponse> {
    return this.httpClient
      .post<IUserResponse>(`${this.API_URL}/auth/login`, user)
      .pipe(
        tap((res: IUserResponse) => {
          console.log(user);
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
