import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyResetPasswordComponent } from './components/verify-reset-password/verify-reset-password.component';
import { authGuard } from './guard/auth.guard';
import { noAuthGuard } from './guard/no-auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShiipingAdressComponent } from './components/shiiping-adress/shiiping-adress.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', canActivate:[authGuard] , component: HomeComponent },
  { path: 'cart', canActivate:[authGuard] , component: CartComponent },
  { path: 'products', canActivate:[authGuard] , component: ProductsComponent },
  { path: 'categories', canActivate:[authGuard] , component: CategoriesComponent },
  { path: 'brands', canActivate:[authGuard] , component: BrandsComponent },
  { path: 'wishlist', canActivate:[authGuard] , component: WishlistComponent },
  { path: 'allorders', canActivate:[authGuard] , component: OrdersComponent },
  { path: 'product/:id', canActivate:[authGuard] , component: ProductDetailsComponent },
  { path: 'shippingAdress/:id', canActivate:[authGuard] , component: ShiipingAdressComponent },

  { path: 'login', canActivate:[noAuthGuard] , component: LoginComponent },
  { path: 'regitser',  canActivate:[noAuthGuard] , component: RegisterComponent },
  { path: 'forgetPassword',  canActivate:[noAuthGuard] , component: ForgetPasswordComponent },
  { path: 'resetPassword',  canActivate:[noAuthGuard] , component: ResetPasswordComponent },
  { path: 'verifyCode',  canActivate:[noAuthGuard] , component: VerifyResetPasswordComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
