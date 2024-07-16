import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){

  }

  apiErrorsMsg:string=''
  isLoading:boolean=false

  resetPasswordForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    newPassword:new FormControl(null , [Validators.required , Validators.pattern(/^[a-z].{5,}$/)])
  })


  handleresetPassword(resetPasswordForm:FormGroup){

    this._AuthService.resetPassword(resetPasswordForm.value).subscribe({
      next:(response)=>{
        this._Router.navigate(['/home'])
      },
      error:(err)=>{
        console.log(err);
        
        this.apiErrorsMsg = err.error.message
      }
    })
  }

}
