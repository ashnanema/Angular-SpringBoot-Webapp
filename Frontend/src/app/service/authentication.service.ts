import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isUserLoggedIn(){
    let active = sessionStorage.getItem("active")
    
    return !(active === null)
  }

  logOut(){
    sessionStorage.removeItem("active")
  }
}
