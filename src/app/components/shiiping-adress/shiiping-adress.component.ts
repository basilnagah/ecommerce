import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shiiping-adress',
  templateUrl: './shiiping-adress.component.html',
  styleUrls: ['./shiiping-adress.component.css']
})
export class ShiipingAdressComponent implements OnInit {

  constructor(private _Router:Router , private _CartService:CartService  , private _ActivatedRoute:ActivatedRoute){}

  cartID:string|null=''

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.cartID = params.get('id')
    })
  }


  shippingForm:FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required ])
  })

  redirectToPaymentPage(url:string){
    window.location.href=url
  }

  shipOrder(form:FormGroup){

    this._CartService.onlinePayment(this.cartID,form.value).subscribe({
      next:(response)=>{
        this.redirectToPaymentPage(response.session.url)
      }
    })
  }

}
