import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router'; 
import {  map, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate  {
  constructor(private autService: AuthService, private router: Router){
    
  }

  canActivate():  Observable< true | UrlTree> {

    return this.autService.loggedIn$.pipe(
      map((loggeIn)=> loggeIn ||  this.router.parseUrl('auth/login'))
    )
    ;
  }
  
}
