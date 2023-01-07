import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemShopingCar } from '../../models/shoping.car';
import { ShopingCartService } from '../../services/shoping.cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems$ = this.shopingCartService.items$;
  price$ = this.shopingCartService.price$;
  discount$ = this.shopingCartService.discount$;
  tax$ = this.shopingCartService.tax$;
  total$ = this.shopingCartService.total$;

  constructor(
    private shopingCartService: ShopingCartService,
    public readonly fb: FormBuilder
  ) {}

  ngOnInit() {}

  addToCart(item: ItemShopingCar) {
    this.shopingCartService.addItem(item);
  }
  removeFromCart(item: ItemShopingCar) {
    this.shopingCartService.removeItem(item);
  }
}
