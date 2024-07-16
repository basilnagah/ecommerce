// import { MatchPassword } from './match-password';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";



export let passwordMatch = (control:AbstractControl):ValidationErrors | null =>{
    let password = control.value.password
    let rePassword = control.value.rePassword

    if(password==rePassword && password && rePassword){
        return null
    }else{
        return {passwordMismatch:true}
    }
}