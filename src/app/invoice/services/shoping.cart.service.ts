import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { ItemShopingCar } from '../models/shoping.car';

@Injectable({
  providedIn: 'root'
})

export class ShopingCartService {

  private items = new BehaviorSubject<ItemShopingCar[]>([]);
  items$ = this.items.asObservable().pipe(
    map((items: ItemShopingCar[]) => items.sort((a, b) => a.quantity - b.quantity))
  );
  
  constructor(private httpClient: HttpClient) {}

  itemsCount$: Observable<number> = this.items$.pipe(
    map((items) => items.length)
  );
 
  price$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { price }) => acc + price, 0))
  );
  discount$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { discount }) => acc + discount, 0))
  );
  tax$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { tax }) => acc + tax, 0))
  );
  
  total$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { total }) => acc + total, 0))
  );
  
  addItem(item: ItemShopingCar): void {
    this.items.next([...this.items.value, item]);
  }

  removeItem(itemToDelete: ItemShopingCar): void {
    this.items.next(this.items.value.filter((item) => item !== itemToDelete));
  }
  
  // Save on DataBase
  onSave(item: ItemShopingCar[]) {
    this.httpClient.post<ItemShopingCar[]>(PathRest.INVOICESDETAILS, item);
  }

  // Save on LocalStore
  onSaveLS(item: ItemShopingCar[], idUser: string){
    localStorage.setItem(idUser,JSON.stringify(item));
  }
  
  onReadLS(idUser: string){
    const data = localStorage.getItem(idUser);
  }

  onDeleteLS(idUser: string){
    localStorage.removeItem(idUser);
  }

}