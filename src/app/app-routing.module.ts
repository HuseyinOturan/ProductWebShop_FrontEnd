import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AllProductComponent} from "./pages/all-product/all-product.component";
import {PostProductComponent} from "./pages/post-product/post-product.component";



const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: "homa-page", component: HomePageComponent},
  {path: "login", component: LoginComponent},
  {path:"register", component:RegisterComponent},
  {path : "allProducts", component :AllProductComponent},
  {path : "postProduct", component: PostProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
