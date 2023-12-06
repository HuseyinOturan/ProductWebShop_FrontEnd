// order.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OrderRequest} from "../interface/OrderRequest";
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orderController/addOrder';

  constructor(private http: HttpClient) {}

  addOrder(orderRequest: OrderRequest): Observable<any> {
    return this.http.post(this.apiUrl, orderRequest);
  }
}
