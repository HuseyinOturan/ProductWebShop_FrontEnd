import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
@Injectable({
  providedIn: "root"
})


export class PostProductComponent {

  public url: string = "http://localhost:8080/product/addProduct";
  public name: string = "";
  public price: string = "";
  public img: string ="";
  public descriptions: string= "";
  public stock: number | null=null;

  constructor(private http: HttpClient) {}

  postProduct(){

    const product={name: this.name,price: this.price, img : this.img, descriptions:this.descriptions,stock: this.stock}

    this.http.post(this.url,product).subscribe();
  }


}
