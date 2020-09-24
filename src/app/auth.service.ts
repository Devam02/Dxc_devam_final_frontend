




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }
cred:Object;
  login(username,password)
  {
    this.cred= {"username": username ,"password":password}
    return this.http.get(
      'https://localhost:44370/students/login?uname='+username+'&&pass='+password )
           
  }

  logout()
  {
    //Logout ka code;
  }
}
