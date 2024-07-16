import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  constructor(private _AuthService:AuthService , private _CartService:CartService){}

  isLoggedUser:boolean=false
  numOfCartItems:number=0

  logout(){
    this._AuthService.logout()
  }

  ngOnInit(){
    this._AuthService.isLoggedIn.subscribe((log)=>{this.isLoggedUser=log})
    this._CartService.cartNum.subscribe((log)=>{this.numOfCartItems=log})
  }
}
