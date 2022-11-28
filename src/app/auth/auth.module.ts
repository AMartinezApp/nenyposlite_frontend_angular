import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingComponent } from './pages/setting/setting.component';

// import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    // AuthService
  ],
})
export class AuthModule {}
