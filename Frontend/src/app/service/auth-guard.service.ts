import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private authenticationService: AuthenticationService, private router:Router ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable <boolean> | Promise<boolean> | boolean{
      const currentUser = this.authenticationService.isUserLoggedIn();
    if(currentUser){
      return true;
      
    }
    this.router.navigate(["login"])
    return false
  }
}
