import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './components/verify-reset-password/verify-reset-password.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeMainSliderComponent } from './components/home-main-slider/home-main-slider.component';
import { HomeCategoriesSliderComponent } from './components/home-categories-slider/home-categories-slider.component';
import { AuthInterceptor } from './auth.interceptor';
import { ShiipingAdressComponent } from './components/shiiping-adress/shiiping-adress.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    BrandsComponent,
    FooterComponent,
    CategoriesComponent,
    ProductsComponent,
    RegisterComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeMainSliderComponent,
    HomeCategoriesSliderComponent,
    ShiipingAdressComponent,
    OrdersComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
