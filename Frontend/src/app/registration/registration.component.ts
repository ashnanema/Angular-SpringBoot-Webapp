import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  user = new User();
  msg="";
  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    
  }

  registrationUser(){
    this.registrationService.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        this.msg="Registration successful";
        this.router.navigate(['/login'])
      }, 
      error => {
        console.log("received exception");
        this.msg = error.error.message;
      }
    )

  }
}
