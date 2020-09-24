import { Router } from '@angular/router';
import { RegisterService } from './../register.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg:RegisterService,private router:Router) { }
  arr=[];
  registerData:Object
  register_data:any

  ngOnInit(): void {
  }

  appen(s)
  {
    this.arr.push(s);
  }
  // register()
  // {
  //   this.registerdata={"User_name" :this.arr[0].viewModel,"Email":this.arr[1].viewModel,"Password":this.arr[2].viewModel,"ConfirmPassword":this.arr[3].viewModel}
  //  this.reg.register(this.registerdata).subscribe(response=>{
  //   this.register_data=response
  //   console.log(this.register_data);
  //   this.router.navigate(['/login']) 

    
  // })

  // }

 
    

  register()
  {
this.registerData={"User_name":this.arr[0].viewModel,"Email":this.arr[1].viewModel,"Password":this.arr[2].viewModel,"Confirmpassword":this.arr[3].viewModel}
this.reg.register(this.registerData).subscribe()
this.router.navigate(['/login'])


  }


  


}

// username,email,password,confirmpassword
