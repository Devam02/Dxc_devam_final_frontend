import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
 
  respo;
 

  posts:any[];
 

  constructor(http:HttpClient,private route:Router) { 
    var currentUser= localStorage.getItem('token');
    var urrentUser=currentUser.substring(1)
    var urrentUse=urrentUser.slice(0,-1);
    var json1= JSON.parse(urrentUse);
  
    if(currentUser && currentUser.length!=4)
    { 
      
      http.get('https://localhost:44370/students/vieworder?username='+json1.username).subscribe
      (res=>{
       this.respo=res;
       
      
    
      }
      )
      
    }
    else
    {
      this.route.navigate(['/login'])
    }
  
  }

  ngOnInit(): void {
  }
  
}
