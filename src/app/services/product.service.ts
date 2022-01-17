import { Injectable } from '@angular/core';
import{Product} from'../models/product'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {productsUrl} from '../../config/api'
// const apiurl="http://localhost:3000/products"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

// products: Product[] =[
// new Product(1, 'product 1','This is the product 1 description. The product us really Kook!',100),
// new Product(2, 'product 2','This is the product 1 description. The product us really Kook!',150),
// new Product(3, 'product 3','This is the product 1 description. The product us really Kook!',50),
// new Product(4, 'product 4','This is the product 1 description. The product us really Kook!',200),
// new Product(5, 'product 5','This is the product 1 description. The product us really Kook!',100),
// new Product(6, 'product 6','This is the product 1 description. The product us really Kook!',150),
// new Product(7, 'product 7','This is the product 1 description. The product us really Kook!',250),
// new Product(8, 'product 8','This is the product 1 description. The product us really Kook!',250),


// ]
  constructor(private http:HttpClient) { }

  getProducts():  Observable <Product[]>{
    return this.http.get<Product[]>(productsUrl)
  }
}
