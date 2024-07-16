import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient , private _Router:Router) {}

  isLoggedIn=new BehaviorSubject<boolean>(localStorage.getItem('token')?true:false)

  register(regForm: object) {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',regForm);
  }
  login(logForm: object):Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',logForm);
  }
  logout(){
    localStorage.removeItem('token')
    this.isLoggedIn.next(false)
    this._Router.navigate(['/login'])

  }

  
  forgetPassword(forgetPasswordForm:any):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',forgetPasswordForm)
  }
  verifyCode(verifyCodeForm:any):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',verifyCodeForm)
  }
  resetPassword(resetPasswordForm:any):Observable<any>{
   return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',resetPasswordForm)
  }
}
