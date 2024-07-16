import { passwordMatch } from './../../customValidations/match-password';
import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router ) {}

  apiErrorsMsg: string = '';
  isLoading: boolean = false;



  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-z].{3,}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-z].{3,}$/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  } , {validators:passwordMatch});

  handleRegister(regForm: FormGroup) {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthService.register(regForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this._Router.navigate(['/login']);
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.apiErrorsMsg = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }


}
