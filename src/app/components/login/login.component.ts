import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){

  }

  apiErrorsMsg: string = '';
  isLoading:Boolean=false

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required , Validators.email]),
    password: new FormControl(null, [Validators.required ,  Validators.pattern(/^[a-z].{5,}$/) ])
  })

  handleLogin(loginForm:FormGroup){

    if(loginForm.valid){
      this.isLoading=true
      this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{
          localStorage.setItem('token',response.token)
          this.isLoading=false
          this._AuthService.isLoggedIn.next(true)
          this._Router.navigate(['/home'])
          },
          error:(err)=>{
          this.isLoading=false
          this.apiErrorsMsg=err.error.message
        }
      })
    }
  }
}
