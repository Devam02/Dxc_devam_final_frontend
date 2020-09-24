import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {
  thankyouData:any

  constructor(private http:HttpClient ,private router:Router) { }

  placeorder(placeorderdata)
  {
    
    // return this.http.post('https://my-json-server.typicode.com/Devam02/FakeServer/users ', JSON.stringify(placeorderdata));

    console.log(placeorderdata);
    return this.http.post(' https://localhost:44370/students/placeorder ', placeorderdata
    ).subscribe(response=>{
      this.thankyouData=response
      this.router.navigate(['/thankyou']) 
    })
    
  }
}




