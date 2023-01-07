import { Router } from '@angular/router';
import { Component,  } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn$ = this.authService.loggedIn$;

  constructor(private authService: AuthService, private route: Router) {}

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('auth/login');
  }
}
