import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CartItem} from '../models/cart-item';
import { cartUrl } from '../../config/api';
import { Product } from '../models/product';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartitems(): Observable<CartItem[]>{
    //TODO Mapping the obtained result to  our cartItems props. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe( map((result:any[]) =>{
let cartItems: CartItem[]=[];
for(let item of result){
  let productexist=false;

  for (let i in  cartItems){
   if(cartItems[i].productId === item.product.id){
    cartItems[i].qty++
    productexist=true
    break;
  }
  }
  if(!productexist){
  cartItems.push(new CartItem(item.id,item.product))
  
  }
}

return cartItems;
      })
    );
  }
  addProductTOCart(product:Product):Observable<any>{
    return this.http.post(cartUrl, { product});
  }
}
