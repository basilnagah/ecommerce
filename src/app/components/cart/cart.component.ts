import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService){}

  cartItems:any

  ngOnInit(){
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cartItems=response.data
      }
    })
  }

  removeCartItem(id:string){
    this._CartService.removeCartItem(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.cartItems=response.data
        this._CartService.cartNum.next(response.numOfCartItems)
      }
    })
  }

  updateCart(id:string,count:number){
    this._CartService.updateCartItem(id,count).subscribe({
      next:(response)=>{
        this.cartItems = response.data
        
      }
    })
  }

}
