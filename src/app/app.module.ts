import { ErrorInterceptor } from './commons/interceptors/error.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HomeComponent } from './home/pages/home/home.component';
import { PagenotfoundComponent } from './home/pages/pagenotfound/pagenotfound.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './auth/services/token.service';
 

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService, //generating the header with token service
      multi: true,
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor, //generating the header with token service
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
