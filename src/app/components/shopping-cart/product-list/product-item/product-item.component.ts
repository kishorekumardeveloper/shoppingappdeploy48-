import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { CartService } from '../../../../services/cart.service';
import { MessengerService } from '../../../../services/messenger.service';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
@Input() productItem: Product;
@Input() addToWishlist: boolean;


  constructor(private msg:MessengerService, private  cartService:CartService, private WishlistService:WishlistService) { }

  ngOnInit(): void {

  }
  handleAddToCart(){
    this.cartService.addProductTOCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);

    })
  }
  handleAddToWishlist(){
    this.WishlistService.addToWishlist(this.productItem.id).subscribe(() =>{
      this.addToWishlist = true;
    })
  }
  handleRemoveFromWishlist(){
    this.WishlistService.removeFromWishlist(this.productItem.id).subscribe(() =>{
        this.addToWishlist = false;
    })
  }

}
