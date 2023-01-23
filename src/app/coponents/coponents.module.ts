import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoponentsModule { }