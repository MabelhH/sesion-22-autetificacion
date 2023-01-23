import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Environment } from './environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CoponentsModule } from './coponents/coponents.module';
import { PagesModule } from './pages/pages.module';

var config = {
   apiKey: Environment.firebase.apiKey,
  authDomain: Environment.firebase.authDomain,
  projectId: Environment.firebase.projectId,
  storageBucket: Environment.firebase.storageBucket,
  messagingSenderId: Environment.firebase.messagingSenderId,
 }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(Environment.firebase)),
    provideAuth(() => getAuth()),
    PagesModule,
    CoponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
