import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {path: "", component : LoginComponent},
  {path: "loginsuccess", component : LoginsuccessComponent, canActivate:[AuthGuardService]},
  {path: "registration", component: RegistrationComponent},
  {path:"login", component: LoginComponent},
  {path: "allProduct", component: AllProductComponent, canActivate:[AuthGuardService]},
  {path: "search", component: SearchComponent, canActivate:[AuthGuardService]},
  {path: "productDetails/:id", component: ProductDetailsComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
