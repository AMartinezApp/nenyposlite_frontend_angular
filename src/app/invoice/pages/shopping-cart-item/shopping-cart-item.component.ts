import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ItemShopingCar } from '../../models/shoping.car';
import { ShopingCartService } from '../../services/shoping.cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent  {
  
  cartItems$ = this.shopingCartService.items$ 

  constructor(private shopingCartService: ShopingCartService) { }
  

  onDeleteClicked(item: ItemShopingCar): void {
    this.shopingCartService.removeItem(item)
  }

}
