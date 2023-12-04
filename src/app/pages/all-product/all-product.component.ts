import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from "../../interface/Product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})

@Injectable({
  providedIn: "root"
})

export class AllProductComponent{
  public products : Product []= [];

  constructor(private http : HttpClient) {}

  getAllProducts() {
    const url= "http://localhost:8080/product/getAllProduct";

    this.http.get<Product[]>(url).subscribe({
      next: (products: Product[]) => this.products=products,
      error : err => console.log(err)
    });
  }
}
