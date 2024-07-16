import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _CartService:CartService){}

  myWishList:any

  ngOnInit(): void {
    this.displayWishList()
  }


  displayWishList(){
    this._CartService.getWishList().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.myWishList = response.data
        
      }
    })
  }

  deletWIshItem(id:any){
    this._CartService.removeWishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.displayWishList()
        this._CartService.wishListProductId.next(response.data)

      }
    })
  }
}
