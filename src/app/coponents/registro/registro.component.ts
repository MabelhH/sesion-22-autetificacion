import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public forRegistro!: FormGroup;
 

  constructor(
    private userService:UserService, 
    private roter:Router){
      this.forRegistro=new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      
      })

  }

  ngOnInit(): void {  
  
}


onSubmit(){
  //console.log(this.forRegistro.value)
  this.userService.registrouser(this.forRegistro.value)
   .then( response => {
   console.log(response)
     this.roter.navigate(['/login']);
   })
   .catch( erorr => console.log(erorr));

}
}
