import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  wishListProductId=new BehaviorSubject<string[]>([])


  constructor(private _HttpClient:HttpClient) { 
    this.getUserCart().subscribe({
      next:(response)=>{
        this.cartNum.next(response.numOfCartItems)
      }
    })

    this.getWishList().subscribe({
      next:(response)=>{
        this.wishListProductId.next((response.data as Iproduct[]).map((product)=>product._id))
      }
    })
  }

  cartNum = new BehaviorSubject<number>(0)

 

  addCartItem(id:string):Observable<any>{
    return this._HttpClient.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: id  
      }
    )
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")
  }

  removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }

  updateCartItem(id:string , count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:count
    })
  }

  onlinePayment(cartID:any , shippingAdress:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200`,
    {
      shippingAdress:shippingAdress
    })
  }



  addToWishlist(pID:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId:pID
    })
  }
  getWishList():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
  }
  removeWishList(id:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
  }
  
}


