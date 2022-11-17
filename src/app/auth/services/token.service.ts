import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'; 
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req:any, next:any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
