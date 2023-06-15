import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../user'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  login = false
  baseUrl = "http://localhost:8001"
  constructor(private httpClient: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    this.login = true
    return this.httpClient.post<any>("http://localhost:8001/login", user);
  }

  public registerUserFromRemote(user: User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8001/registeruser", user)
  }

  public isUserLogin(){
    return this.login;
  }

}
