import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _CartService:CartService){}

  @Input() product!:Iproduct

  wishListProducts:string[]= []

  ngOnInit(): void {
    this._CartService.wishListProductId.subscribe((ids)=>{ this.wishListProducts = ids }) 
    console.log(this.wishListProducts);
       
  }

  addToCart(id:string){
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this._CartService.cartNum.next(response.numOfCartItems)
      },
      error:(err)=>{console.log(err);
      }
    })
  }


  addWishList(pID:any){
    this._CartService.addToWishlist(pID).subscribe({
      next:(repsonse)=>{
        console.log(repsonse);
        this._CartService.wishListProductId.next(repsonse.data)
      }
    })
  }

  isInWishList(id:any){
    return this.wishListProducts.includes(id)
  }
}
