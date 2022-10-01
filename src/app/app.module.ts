import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app-routing.component';
import { AppComponent } from './app.component';

// imports for angular Fire
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule  } from "@angular/fire/compat/firestore";

import { environment } from 'src/environments/environment';
import { HttpInterceptorInterceptor } from './core/interceptor/http-interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    appRoutes,
    SharedModule,
    BrowserAnimationsModule
 
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
