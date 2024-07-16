import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.css']
})
export class VerifyResetPasswordComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){

  }


  apiErrorsMsg:string=''
  isLoading:boolean=false
  verifyRestCodeForm:FormGroup= new FormGroup({
    resetCode: new FormControl(null,[Validators.required])
  })


  handleVerifyCode(verifyForm:FormGroup){
      this._AuthService.verifyCode(verifyForm.value).subscribe({
        next:(response)=>{
          console.log(response);      
          this._Router.navigate(['/resetPassword'])
        },
        error:(err)=>{
         console.log(err);
         this.apiErrorsMsg = err.error.message
        }
      })
  }
}
