import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {DataService} from "./dataService";

@Injectable({
  providedIn : 'root'
})
export class ProductService{
  // properties

  public name: string = "";
  public price: string = "";
  public img: string ="";
  public descriptions: string= "";
  public stock: number | null=null;

  // constructor
  constructor(
    private apiService :ApiService,
    private dataService : DataService
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

  public getAllProduct() : void {
    const url ="http://localhost:8080/product/getAllProduct";
    this.apiService.get(url)

  }




}
