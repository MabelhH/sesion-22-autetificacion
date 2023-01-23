import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userservice:UserService, private router:Router){

  }
  logout(){
    this.userservice.logout()
    .then( ()=> {
      this.router.navigate(['/login']);
    } )
    .catch(error => console.log(error))
  }

}
