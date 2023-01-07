import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './shared/navbar/navbar.module';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ErrorInterceptor } from './commons/interceptors/error.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './auth/services/token.service';

import { HomeComponent } from './home/pages/home/home.component';
import { PagenotfoundComponent } from './home/pages/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { ROOT_REDUCERS } from './state/app.state'; 
  

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent, 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name:'TEST' }), //maxAge: 25, logOnly: environment.production
  
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
export class AppModule {
   
}
