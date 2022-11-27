import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
    providedIn: 'root',
  })
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private router: Router, private authService: AuthService){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err) => {

                console.log(err)
                if(
                    [409].indexOf(err.status) !== -1
                ){
                    this.authService.logout();
                    this.router.navigateByUrl('auth/login');
                }
                return throwError(err)

            })
        )
    }
    
}