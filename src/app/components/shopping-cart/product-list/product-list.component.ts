import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: Product[] =[]
wishlist: number[] =[]
  constructor(private productService:ProductService,private WishlistService:WishlistService) { }

  ngOnInit(): void {
this.loadProduct();
  this.loadWishlist();

  }
  loadProduct(){
this.productService.getProducts().subscribe((products)=>{
  this.productList=products;
})
  }
  loadWishlist(){
   this.WishlistService.getWishlist().subscribe((productIds)=>{

 this.wishlist = productIds;
  })
  }
}
