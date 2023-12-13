import {Component, OnInit} from '@angular/core';
import {Product} from "../../interface/Product";
import {ProductService} from "../../service/ProductService";
import {LoginComponent} from "../login/login.component";
import {HttpClient} from "@angular/common/http";
import {OrderItemRes} from "../../interface/OrderItemRes";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{

  public products: Product[] = [];
  public orderItemAppList : {productAppId: number; amount : number}[] = [];
  public userId : number = 0;
  public result : string ="";

   public orderItemResList : OrderItemRes [] = [];

  public quantity: number = 0; // default

  constructor(private productService : ProductService, private loginComponent : LoginComponent, private http : HttpClient,
              ) {}
  ngOnInit(): void {
    const userJson =localStorage.getItem('currentUser');
    const currentUser = userJson ? JSON.parse(userJson) : null;

    this.userId= currentUser.id;

    this.productService.getAllProduct().subscribe((products)=> {
      this.products = products;
    });
  }

  addToOrder (product : Product, quantity: number) : void {
    const orderItemApp= {
      productAppId : product.id,
      amount : quantity
    };

    this.orderItemAppList.push(orderItemApp);
  }


  createOrder (): void {
    const orderApp= {
      id :this.userId,
      orderItemAppList : this.orderItemAppList
    };
    const url = 'http://localhost:8080/order/addOrder';
    let addOrder= this.http.post(url,orderApp);

    addOrder.subscribe(
      {
        next :() => this.result ="addOrder OK",
        error :() => this.result=" orderfailed"
      });
  }
  getOrderItemByUserId() : void {
    const userJson = localStorage.getItem('currentUser');
    const currentUser = userJson ? JSON.parse(userJson) : null;
    const id= currentUser.id;

    let url = `http://localhost:8080/orderItem/getOrderItemUserId?userId=${id}`;

    this.http.get<OrderItemRes[]>(url).subscribe(
      (orderItemRes: OrderItemRes []) => {
        this.orderItemResList=orderItemRes;
      },
      error => {
        console.log('failed', error);
      }
    )
  }
}
