import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from 'src/app/interfaces/icategory';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-categories-slider',
  templateUrl: './home-categories-slider.component.html',
  styleUrls: ['./home-categories-slider.component.css']
})
export class HomeCategoriesSliderComponent implements OnInit {

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
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
        items: 7
      }
    },
    nav: false
  }
  
  constructor(private _ProductsService:ProductsService){}

  allCategories:Icategory[]=[]
  
  ngOnInit(){
    this._ProductsService.getAllCategories().subscribe({
      next:(response)=>{
        this.allCategories = response.data
        
      }
    })
  }
}