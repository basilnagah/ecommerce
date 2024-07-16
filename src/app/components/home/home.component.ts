import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _HttpClient:HttpClient , private _ProductsService:ProductsService , private _CartService:CartService){}

  allProducts:Iproduct[]=[]

  ngOnInit(){
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        
        this.allProducts = response.data
      },
      error:(err)=>{

      }
    })
  }
}
