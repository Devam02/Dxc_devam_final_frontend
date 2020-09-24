import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutproduct',
  templateUrl: './aboutproduct.component.html',
  styleUrls: ['./aboutproduct.component.css']
})
export class AboutproductComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

    
   
    
    
    
  }
  about(){
       this.route.navigate(['/login'])
  }

}
