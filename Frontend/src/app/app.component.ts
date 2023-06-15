import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fontend';
  constructor(public authenticationService: AuthenticationService, private router: Router ){

  }

  loggedOut(){
    this.authenticationService.logOut();
    this.router.navigate(["login"])
  }
}
