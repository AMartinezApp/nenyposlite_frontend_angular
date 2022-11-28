import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { CategoryI } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  
  
  constructor(private httpClient: HttpClient) {}

  onSave(category: CategoryI){
    return this.httpClient.post<CategoryI>(PathRest.CATEGORIES,category);
  }
  onUpdate(category: CategoryI){
    return this.httpClient.put<CategoryI>(`${PathRest.CATEGORIES}/${category.id}`,category);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${PathRest.CATEGORIES}/${requestId}`);  
  }
  
  getAll(): Observable<CategoryI[]> { 
     return this.httpClient.get<CategoryI[]>(PathRest.CATEGORIES);
  }
 
}
