import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './coponents/login/login.component';
import { RegistroComponent } from './coponents/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [ 
 {path:'registro',component:RegistroComponent},
 {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent ,...canActivate(()=> redirectUnauthorizedTo(['/login']))},
 {path:'**',pathMatch:'full',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
