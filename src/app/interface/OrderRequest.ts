import {OrderItemRequest} from "./OrderItemRequest";
export interface OrderRequest {
  userId : number;
  orderItemRequestList: OrderItemRequest[];

}
