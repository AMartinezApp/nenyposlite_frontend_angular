import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // return true if the user loggedIn and pass 
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // return false and redirect to login page
    this.router.navigate(['/auth/login']);
    return false;
  }
}
