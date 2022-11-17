import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router'; 
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  constructor(private autService: AuthService, private router: Router){
    
  }

  canActivate( ):  boolean | UrlTree {
    return this.autService.isLoggedIn() || this.router.parseUrl('/login');
  }
  
}
