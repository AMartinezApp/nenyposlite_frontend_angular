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

  getAll(): Observable<ProductI[]> { 
    return this.httpClient.get<ProductI[]>(PathRest.PRODUCTS);
 }

  onSave(product: ProductI): Observable<ProductI[]>{
    return this.httpClient.post<ProductI[]>(PathRest.PRODUCTS,product);
  }
  onUpdate(product: ProductI): Observable<ProductI[]>{
    return this.httpClient.put<ProductI[]>(`${PathRest.PRODUCTS}/${product.id}`,product);
  }
  
  
  
 
}
