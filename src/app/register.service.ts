import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register_data:any

  constructor(private http:HttpClient,private route:Router) { }

  register(credentials){
    // return this.http.post('', JSON.stringify(credentials))
    return this.http.post('https://localhost:44370/students/register',credentials
    )}
    
  
  }
  // register(registerData)
  // { 
  //   return this.http.post('https://localhost:44369/students/register',registerData)    
  // }
  // {
  //   method: 'POST',
  //   body: JSON.stringify(credentials),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }






