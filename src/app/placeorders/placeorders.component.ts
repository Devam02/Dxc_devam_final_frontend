import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlaceorderService } from '../placeorder.service';
 
@Component({
  selector: 'app-placeorders',
  templateUrl: './placeorders.component.html',
  styleUrls: ['./placeorders.component.css']
})
export class PlaceordersComponent implements OnInit {

  
 
  constructor(private porder:PlaceorderService ,private router:Router) { }
 
  ngOnInit(): void {
    var result_object=JSON.stringify(localStorage.getItem('token'))

    if(result_object.length==4)
    {
      this.router.navigate(['/login'])
    }
    
  }
  
  arr=[]
  appen(a)
  {
    this.arr.push(a)
  }
  
 
  
  
 
  placeorder(placeorderdata){
    


    this.porder.placeorder(placeorderdata)
    this.router.navigate(['/thankyou'] )


     
      
  }
 
}