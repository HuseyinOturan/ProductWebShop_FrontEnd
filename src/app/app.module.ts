import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AllProductComponent } from './pages/all-product/all-product.component';
import { PostProductComponent } from './pages/post-product/post-product.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AllOrderComponent } from './pages/all-order/all-order.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AllProductComponent,
    PostProductComponent,
    UserPageComponent,
    AllOrderComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
