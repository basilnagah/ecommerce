import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService , private _CartService:CartService){}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  productId:string|null=null
  productDetails?:Iproduct

  ngOnInit(){
    this._ActivatedRoute.paramMap.subscribe((params)=>{this.productId=params.get('id')})

    if(this.productId!=null){

      this._ProductsService.getProductDetails(this.productId).subscribe({
        next:(respone)=>{
          this.productDetails=respone.data
          
        },
        error:(err)=>{

        }
      })
    }

  }

  addToCart(id:any){
    this._CartService.addCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this._CartService.cartNum.next(response.numOfCartItems)

      },
      error:(err)=>{console.log(err);
      }
    })
  }



}
