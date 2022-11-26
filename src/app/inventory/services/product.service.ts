import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { ProductI } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 
  constructor(private httpClient: HttpClient) {}

  onSave(product: ProductI){
    return this.httpClient.post<ProductI>(PathRest.PRODUCTS,product);
  }
  onUpdate(product: ProductI){
    return this.httpClient.put<ProductI>(`${PathRest.PRODUCTS}/${product.id}`,product);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${PathRest.PRODUCTS}/${requestId}`);  
  }
  
  getAll(): Observable<ProductI[]> { 
     return this.httpClient.get<ProductI[]>(PathRest.PRODUCTS);
  }
 
}
