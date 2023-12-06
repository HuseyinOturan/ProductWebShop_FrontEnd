import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {DataService} from "./dataService";
import {Observable} from "rxjs";
import {Product} from "../interface/Product";

@Injectable({
  providedIn : 'root'
})
export class ProductService{
  // properties

  public name: string = "";
  public price: string = "";
  public img: string = " ";
  public descriptions: string= "";
  public stock: number | null=null;

  // constructor
  constructor(
    private apiService :ApiService,

  ) {}

  // addProduct
  public addProduct() : void {
    const url ="http://localhost:8080/product/addProduct";
    this.apiService.post(url,{
      name : this.name,
      price :this.price,
      img : this.img,
      descriptions: this.descriptions,
      stock : this.stock,
    }).subscribe()
  }
  // getAllProduct
  public getAllProduct() : Observable<Product[]> {
    const url ="http://localhost:8080/product/getAllProduct";
    return this.apiService.getAll<Product[]>(url);
  }

}
