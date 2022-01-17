import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart-item';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productName:any;
  productid:any;
  qty:any;
  price:any;
  cartItems=[];
  cartTotal=0;

  constructor(private msg:MessengerService,private cartservice:CartService) { 

  }

  ngOnInit(): void {
this.handleSubscription();
this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:Product) =>{
      this.loadCartItems();
    })
  }

  loadCartItems(){
this.cartservice.getCartitems().subscribe((item: CartItem[])=>{
this.cartItems= item;
this.calcCartTotal();
})
  }

addproductitemtocart(product: Product){  
this.calcCartTotal();
  }

 calcCartTotal(){
  this.cartTotal=0;
  this.cartItems.forEach(item => {
    this.cartTotal +=(item.qty *item.price)
  })

  }
  }
