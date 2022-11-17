import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component'; 
import { HomeComponent } from './home/pages/home/home.component';
import { PagenotfoundComponent } from './home/pages/pagenotfound/pagenotfound.component'; 
import { NavbarModule } from './shared/navbar/navbar.module';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './auth/services/token.service'; 
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule 
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService, //generating the header with token service
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
