import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg=""
  res=""
  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear()
  }

  loginUser(){
    this.registrationService.loginUserFromRemote(this.user).subscribe(data=>{
      this.res = 'loggedIn';
      sessionStorage.setItem("active", JSON.stringify(this.res))
      this.router.navigate(["/loginsuccess"]);
      
      
    }, 
    error=>{
      this.msg="Bad Credentials, please enter valid email"
    } 
    );

  }
}
